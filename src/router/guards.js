import { useFlashMessages } from '@/composables/flashMessages'
import { useLibraryLoader } from '@/composables/libraryLoader'
import { useHandlePermission } from '@/composables/handlePermission'

export default function addNavigationGuards (router, store) {
  const { addWarningMessage, clearAllMessages } = useFlashMessages()
  const { getLibraryHandle } = useLibraryLoader(store)

  router.beforeEach(async (to, from) => {
    // first of all, as we are using async storage for store, wait for reload
    await store.restored

    // first check if we have a library handle
    // beware that we are not currently heading to it
    const libraryHandle = await getLibraryHandle()
    if (!libraryHandle && to.name !== 'setup') {
      // persist message as we will redirect
      addWarningMessage('Library is not found, please define main directory', '', true)
      return { name: 'setup' }
    }

    // check that we still have permission
    if (libraryHandle) {
      const hasPermission = await useHandlePermission().hasPermission(libraryHandle.value)
      if (!hasPermission && to.name !== 'setup') {
        // persist message as we will redirect
        addWarningMessage('Access to library is no longer granted', '', true)
        return { name: 'setup' }
      }
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
