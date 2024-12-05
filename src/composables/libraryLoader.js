import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { FILE_EXTENSIONS_SUPPORTED } from '@/constants'

export function useLibraryLoader () {
  const store = useStore()
  const libraryHandle = computed(() => store.getters.libraryHandle)
  let isLoading = false

  watch(libraryHandle, async (newValue) => {
    if (!newValue) return
    isLoading = true
    loadLibrary()
  })

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
      console.error('Error on authors listing:', e)
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
      console.error('Error on book listing:', e)
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
            console.warn('File extension not supported: ' + extension)
          }
        }
      }
    } catch (e) {
      console.error('Error on book listing:', e)
    }
    return list
  }

  const loadLibrary = async () => {
    const authors = await listAuthors()
    for (const authorHandle of authors) {
      const authorBooks = {}
      const books = await listBooksFromAuthor(authorHandle)
      for (const bookHandle of books) {
        authorBooks[bookHandle.name] = await listChaptersFromBook(bookHandle)
      }
      store.dispatch('setAuthorBooks', { author: authorHandle.name, books: authorBooks })
    }
    isLoading = false
  }

  return {
    isLoading
  }
}
