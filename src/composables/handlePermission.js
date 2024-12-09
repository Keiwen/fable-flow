import { ref } from 'vue'
import { DIRECTORY_PERMISSION_MODE } from '@/constants'
import { useFlashMessages } from '@/composables/flashMessages'

export function useHandlePermission () {
  const permissionStatus = ref(null)
  let isChecking = false
  const { addErrorMessage } = useFlashMessages()

  const hasPermission = async (handle) => {
    if (!handle) {
      permissionStatus.value = false
      return
    }

    if (permissionStatus.value === null && !isChecking) {
      isChecking = true
      await checkPermission(handle)
    }
    return permissionStatus.value
  }

  const checkPermission = async (handle) => {
    try {
      // Check current
      let permission = await handle.queryPermission({ mode: DIRECTORY_PERMISSION_MODE })

      // If not granted, ask for it
      if (permission !== 'granted') {
        permission = await handle.requestPermission({ mode: DIRECTORY_PERMISSION_MODE })
        if (navigator.storage && navigator.storage.persist) {
          await navigator.storage.persist()
        }
      }
      permissionStatus.value = (permission === 'granted')
    } catch (e) {
      addErrorMessage('An error occurred on permission check')
      console.error(e)
      permissionStatus.value = false
    }
    isChecking = false
  }

  return { permissionStatus, hasPermission }
}
