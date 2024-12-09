import { useFlashMessages } from '@/composables/flashMessages'
import { useLibraryLoader } from '@/composables/libraryLoader'

export default function addNavigationGuards (router, store) {
  const { addWarningMessage, clearAllMessages } = useFlashMessages()
  const { libraryHandle } = useLibraryLoader(store)

  router.beforeEach(async (to, from) => {
    // first check if we have a library handle
    // beware that we are not currently heading to it
    if (!libraryHandle.value && to.name !== 'setup') {
      // persist message as we will redirect
      addWarningMessage('Library is not found, please define main directory', '', true)
      return { name: 'setup' }
    }

    // check if we have a current author/book when we try to go on chapter
    if ((!store.getters.author || !store.getters.book) && to.name === 'chapter') {
      addWarningMessage('Your current book is not found, please choose one', '', true)
      return { name: 'book' }
    }
  })

  router.afterEach(() => {
    // after each route decided, clear previous messages
    clearAllMessages()
  })
}
