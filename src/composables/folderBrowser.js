import { ref } from 'vue'
import { useStore } from 'vuex'
import { FILE_EXTENSIONS_SUPPORTED } from '@/constants'

export function useFolderBrowser () {
  const store = useStore()
  const libraryHandle = store.getters.getLibraryHandle
  let authorsLoaded = false
  const authorHandles = ref([])
  let isCheckingAuthors = false
  let booksLoadedForAuthor = ''
  const bookHandles = ref([])
  let isCheckingBooks = false
  let chaptersLoadedForBook = ''
  const chapterHandles = ref([])
  let isCheckingChapters = false

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

  const checkChaptersLoaded = async (forAuthor, forBook) => {
    if (chaptersLoadedForBook !== forBook && !isCheckingChapters) {
      isCheckingChapters = true
      await listChapters(forAuthor, forBook)
    }
  }

  const getChaptersHandles = async (forAuthor, forBook) => {
    await checkChaptersLoaded(forAuthor, forBook)
    return chapterHandles.value
  }

  const getChapterHandle = async (forAuthor, forBook, chapter) => {
    await checkChaptersLoaded(forAuthor, forBook)
    const item = chapterHandles.value.find(handle => handle.name === chapter)
    return item ? item.handle : null
  }

  const listChapters = async (forAuthor, forBook) => {
    chapterHandles.value = []
    chaptersLoadedForBook = ''
    const bookHandle = await getBookHandle(forAuthor, forBook)
    if (!bookHandle) {
      isCheckingChapters = false
      return
    }

    try {
      for await (const [name, entry] of bookHandle.entries()) {
        if (entry.kind === 'file') {
          // get file extension
          const extension = name.slice(name.lastIndexOf('.'))
          if (FILE_EXTENSIONS_SUPPORTED.includes(extension)) {
            chapterHandles.value.push({ name, handle: entry })
          } else {
            console.warn('File extension not supported: ' + extension)
          }
        }
      }
      chaptersLoadedForBook = forBook
    } catch (e) {
      console.error('Error on chapter listing:', e)
    }
    isCheckingChapters = false
  }

  return {
    authorHandles,
    getAuthorHandles,
    getAuthorHandle,
    bookHandles,
    getBookHandles,
    getBookHandle,
    chapterHandles,
    getChaptersHandles,
    getChapterHandle
  }
}
