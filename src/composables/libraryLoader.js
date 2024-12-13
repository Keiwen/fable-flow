import { ref } from 'vue'
import { FILE_EXTENSIONS_SUPPORTED } from '@/constants'
import { useStore } from 'vuex'
import { useFlashMessages } from '@/composables/flashMessages'
import { useStorageInstance } from '@/composables/storageInstance'

const libraryHandle = ref(null)
const tracks = ref({})

export function useLibraryLoader (store) {
  let isLoading = false
  if (!store) store = useStore()
  const { addErrorMessage } = useFlashMessages()

  const getLibraryHandle = async () => {
    if (libraryHandle.value) {
      return libraryHandle
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
      for await (const [, entry] of libraryHandle.value.entries()) {
        if (entry.kind === 'directory') {
          list.push(entry)
        }
      }
    } catch (e) {
      addErrorMessage('An error occurred on authors listing')
      console.error(e)
    }
    return list
  }

  const listBooksFromAuthor = async (authorHandle) => {
    const list = []
    if (!authorHandle) return list

    try {
      for await (const [, entry] of authorHandle.entries()) {
        if (entry.kind === 'directory') {
          list.push(entry)
        }
      }
    } catch (e) {
      addErrorMessage('An error occurred on books listing for author ' + authorHandle.name)
      console.error(e)
    }
    return list
  }

  const listChaptersFromBook = async (bookHandle) => {
    const list = []
    if (!bookHandle) return list

    try {
      for await (const [name, entry] of bookHandle.entries()) {
        if (entry.kind === 'file') {
          // get file extension
          const extension = name.slice(name.lastIndexOf('.'))
          if (FILE_EXTENSIONS_SUPPORTED.includes(extension)) {
            list.push(entry)
          } else {
            console.log('File extension not supported for file ' + bookHandle.name + '/' + name)
          }
        }
      }
    } catch (e) {
      addErrorMessage('An error occurred on chapters listing for book ' + bookHandle.name)
      console.error(e)
    }
    return list
  }

  const loadLibrary = async (mainHandle) => {
    isLoading = true
    libraryHandle.value = mainHandle
    tracks.value = {}
    const authors = await listAuthors()
    for (const authorHandle of authors) {
      const authorBooks = {}
      const books = await listBooksFromAuthor(authorHandle)
      for (const bookHandle of books) {
        authorBooks[bookHandle.name] = await listChaptersFromBook(bookHandle)
      }
      tracks.value[authorHandle.name] = authorBooks
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
    if (!chapters[index]) return null
    return chapters[index]
  }

  return {
    libraryHandle,
    getLibraryHandle,
    tracks,
    loadLibrary,
    getAuthorsList,
    getBooksFromAuthor,
    getChaptersFromBook,
    getChapterFromBook,
    isLoading
  }
}
