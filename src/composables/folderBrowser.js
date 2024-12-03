import { ref } from 'vue'
import { useStore } from 'vuex'

export function useFolderBrowser () {
  const store = useStore()
  const libraryHandle = store.getters.getLibraryHandle
  let authorsLoaded = false
  const authorHandles = ref([])
  let isCheckingAuthors = false
  let booksLoadedForAuthor = ''
  const bookHandles = ref([])
  let isCheckingBooks = false

  const checkAuthorsLoaded = async () => {
    if (!authorsLoaded && !isCheckingAuthors) {
      isCheckingAuthors = true
      await listAuthors()
    }
  }

  const getAuthorHandles = async () => {
    await checkAuthorsLoaded()
    return authorHandles.value
  }

  const getAuthorHandle = async (author) => {
    await checkAuthorsLoaded()
    const item = authorHandles.value.find(handle => handle.name === author)
    return item ? item.handle : null
  }

  const listAuthors = async () => {
    authorHandles.value = []
    authorsLoaded = false
    if (!libraryHandle) {
      isCheckingAuthors = false
      return
    }

    try {
      for await (const [name, entry] of libraryHandle.entries()) {
        if (entry.kind === 'directory') {
          authorHandles.value.push({ name, handle: entry })
        }
      }
      authorsLoaded = true
    } catch (e) {
      console.error('Error on authors listing:', e)
    }
    isCheckingAuthors = false
  }

  const checkBooksLoaded = async (forAuthor) => {
    if (booksLoadedForAuthor !== forAuthor && !isCheckingBooks) {
      isCheckingBooks = true
      await listBooks(forAuthor)
    }
  }

  const getBookHandles = async (forAuthor) => {
    await checkBooksLoaded(forAuthor)
    return bookHandles.value
  }

  const getBookHandle = async (forAuthor, book) => {
    await checkBooksLoaded(forAuthor)
    const item = bookHandles.value.find(handle => handle.name === book)
    return item ? item.handle : null
  }

  const listBooks = async (forAuthor) => {
    bookHandles.value = []
    booksLoadedForAuthor = ''
    const authorHandle = await getAuthorHandle(forAuthor)
    if (!authorHandle) {
      isCheckingBooks = false
      return
    }

    try {
      for await (const [name, entry] of authorHandle.entries()) {
        if (entry.kind === 'directory') {
          bookHandles.value.push({ name, handle: entry })
        }
      }
      booksLoadedForAuthor = forAuthor
    } catch (e) {
      console.error('Error on book listing:', e)
    }
    isCheckingBooks = false
  }

  return {
    authorHandles,
    getAuthorHandles,
    getAuthorHandle,
    bookHandles,
    getBookHandles,
    getBookHandle
  }
}
