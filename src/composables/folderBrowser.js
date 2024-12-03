import { ref } from 'vue'

export function useFolderBrowser () {
  const authors = ref([])
  const books = ref([])

  const setAuthors = (authorList) => {
    authors.value = authorList
    return authorList
  }

  const setBooks = (bookList) => {
    books.value = bookList
    return bookList
  }

  const listAuthors = async (handle) => {
    if (!handle) {
      return setAuthors([])
    }

    try {
      const authorList = []
      for await (const [name, entry] of handle.entries()) {
        if (entry.kind === 'directory') {
          authorList.push({ name, handle: entry })
        }
      }
      return setAuthors(authorList)
    } catch (e) {
      console.error('Error on authors listing:', e)
      return setAuthors([])
    }
  }

  const listBooks = async (handle) => {
    if (!handle) {
      return setBooks([])
    }

    try {
      const bookList = []
      for await (const [name, entry] of handle.entries()) {
        if (entry.kind === 'directory') {
          bookList.push({ name, handle: entry })
        }
      }
      return setBooks(bookList)
    } catch (e) {
      console.error('Error on books listing:', e)
      return setBooks([])
    }
  }

  return {
    authors,
    listAuthors,
    books,
    listBooks
  }
}
