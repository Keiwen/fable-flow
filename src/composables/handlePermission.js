import { ref } from 'vue'
import { DIRECTORY_PERMISSION_MODE } from '@/constants'

export function useHandlePermission () {
  const permissionStatus = ref(null)
  let isChecking = false

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
      }
      permissionStatus.value = (permission === 'granted')
    } catch (e) {
      console.error('Issue on permission check:', e)
      permissionStatus.value = false
    }
    isChecking = false
  }

  return { permissionStatus, hasPermission }
}
