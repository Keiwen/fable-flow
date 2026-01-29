import { ref } from 'vue'
import { FILE_EXTENSIONS_SUPPORTED } from '@/constants'
import { useStore } from 'vuex'
import { useFlashMessages } from '@/composables/flashMessages'
import { useStorageInstance } from '@/composables/storageInstance'

const libraryHandle = ref(null)
const tracks = ref({})
let instance = null

// NOTE ABOUT HANDLE ISSUE
// Around 2026-01-28, there was update in chrome mobile browser to reinforce security
// since then, handles should be retrieved almost every time we need it.
// The way we used to store it is not working anymore as handle object is invalidated
// therefore, we are working with names and retrieve handler again and again.
// Current code is a mix between the old way and the new, to fix our issue without reworking everything

export function useLibraryLoader (store) {
  if (instance) return instance // always return instance if exist

  let isLoading = false
  const loadedBooksCount = ref(0)
  if (!store) store = useStore()
  const { addErrorMessage } = useFlashMessages()

  const getLibraryHandle = async () => {
    if (libraryHandle.value) {
      return libraryHandle.value
    }
    // try to retrieve what was stored
    libraryHandle.value = await useStorageInstance().getLibraryHandle()
    if (libraryHandle.value) {
      // if something was stored, reload library
      await loadLibrary(libraryHandle.value)
    }
    return libraryHandle.value
  }

  const listAuthors = async () => {
    const list = []
    if (!libraryHandle.value) return list

    try {
      for await (const [name, entry] of libraryHandle.value.entries()) {
        if (entry.kind === 'directory') {
          // HANDLE ISSUE: store name only here. If you store handle, later this handle will be invalidated
          list.push(name)
        }
      }
      // force alphabetical order
      list.sort((a, b) => a.localeCompare(b, ['fr', 'en'], { sensitivity: 'base' }))
    } catch (e) {
      addErrorMessage('An error occurred on authors listing', '', true)
      console.error(e)
    }
    return list
  }

  const listBooksFromAuthor = async (authorHandle) => {
    const list = []
    if (!authorHandle) return list

    try {
      for await (const [entryName, entry] of authorHandle.entries()) {
        if (entry.kind === 'directory') {
          // HANDLE ISSUE: store only name here. If you store handle, later this handle will be invalidated
          list.push(entryName)
        }
      }
      // force alphabetical order
      list.sort((a, b) => a.localeCompare(b, ['fr', 'en'], { sensitivity: 'base' }))
    } catch (e) {
      addErrorMessage('An error occurred on books listing for author ' + authorHandle.name, '', true)
      console.error(e)
    }
    return list
  }

  const listChaptersFromBook = async (bookHandle) => {
    const list = []
    if (!bookHandle) return list

    try {
      for await (const [entryName, entry] of bookHandle.entries()) {
        if (entry.kind === 'file') {
          // get file extension
          const extension = entryName.slice(entryName.lastIndexOf('.'))
          if (FILE_EXTENSIONS_SUPPORTED.includes(extension)) {
            list.push(entryName)
          } else {
            console.log('File extension not supported for file ' + bookHandle.name + '/' + entryName)
          }
        }
      }
      // force alphabetical order
      list.sort((a, b) => a.localeCompare(b, ['fr', 'en'], { sensitivity: 'base' }))
    } catch (e) {
      addErrorMessage('An error occurred on chapters listing for book ' + bookHandle.name, '', true)
      console.error(e)
    }
    return list
  }

  const loadLibrary = async (mainHandle) => {
    isLoading = true
    loadedBooksCount.value = 0
    libraryHandle.value = mainHandle
    tracks.value = {}
    const allAuthorsNames = await listAuthors()
    for (const authorName of allAuthorsNames) {
      // HANDLE ISSUE: we did NOT store the full handle for security reason. Check handle again
      const authorHandle = await libraryHandle.value.getDirectoryHandle(authorName)
      const authorBooks = {}
      const books = await listBooksFromAuthor(authorHandle)
      for (const bookName of books) {
        const bookHandle = await authorHandle.getDirectoryHandle(bookName)
        authorBooks[bookName] = await listChaptersFromBook(bookHandle)
        loadedBooksCount.value++
      }
      if (books.length) tracks.value[authorName] = authorBooks
    }
    await store.dispatch('selectLibrary', mainHandle.name)
    await useStorageInstance().setLibraryHandle(mainHandle)
    isLoading = false
  }

  const getAuthorsList = () => {
    return Object.keys(tracks.value)
  }

  const getBooksFromAuthor = (author) => {
    if (!tracks.value[author]) return []
    return Object.keys(tracks.value[author])
  }

  const getChaptersFromBook = (author, book) => {
    if (!tracks.value[author]) return []
    if (!tracks.value[author][book]) return []
    return tracks.value[author][book]
  }

  const getChapterFromBook = (author, book, index) => {
    const chapters = getChaptersFromBook(author, book)
    if (!chapters[index]) return ''
    return chapters[index]
  }

  const getChapterHandle = async (author, book, index) => {
    const chapterName = getChapterFromBook(author, book, index)
    if (chapterName === '') return null
    const authorHandle = await libraryHandle.value.getDirectoryHandle(author)
    const bookHandle = await authorHandle.getDirectoryHandle(book)
    return await bookHandle.getFileHandle(chapterName)
  }

  instance = {
    libraryHandle,
    loadedBooksCount,
    getLibraryHandle,
    tracks,
    loadLibrary,
    getAuthorsList,
    getBooksFromAuthor,
    getChaptersFromBook,
    getChapterFromBook,
    getChapterHandle,
    isLoading
  }

  return instance
}
