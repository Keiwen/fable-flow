import { ref } from 'vue'

export function useFolderBrowser () {
  const authors = ref([])

  const setAuthors = (authorsList) => {
    authors.value = authorsList
    return authorsList
  }

  const listAuthors = async (handle) => {
    if (!handle) {
      return setAuthors([])
    }

    try {
      const authorsList = []
      for await (const [name, entry] of handle.entries()) {
        if (entry.kind === 'directory') {
          authorsList.push({ name, handle: entry })
        }
      }
      return setAuthors(authorsList)
    } catch (e) {
      console.error('Error on authors listing:', e)
      return setAuthors([])
    }
  }

  return {
    authors,
    listAuthors
  }
}
