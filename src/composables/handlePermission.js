import { ref } from 'vue'

export function useHandlePermission () {
  const permissionStatus = ref(null)
  let isChecking = false

  const hasPermission = async (handle) => {
    if (!handle) {
      permissionStatus.value = false
      return
    }

    if (permissionStatus.value === null && !isChecking) {
      await checkPermission(handle)
    }
    return permissionStatus.value
  }

  const checkPermission = async (handle) => {
    isChecking = true
    try {
      // Check current
      let permission = await handle.queryPermission({ mode: 'read' })

      // If not granted, ask for it
      if (permission !== 'granted') {
        permission = await handle.requestPermission({ mode: 'read' })
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
