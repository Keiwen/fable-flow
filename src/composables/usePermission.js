import { ref } from 'vue'

export function usePermission () {
  const hasPermission = ref(false) // state to follow changes

  const setPermission = (permissionStatus) => {
    if (!permissionStatus) {
      console.error('No permission for library')
    }
    hasPermission.value = permissionStatus
    return permissionStatus
  }

  const checkPermission = async (handle) => {
    if (!handle) {
      return setPermission(false)
    }

    try {
      // Check current
      const permission = await handle.queryPermission({ mode: 'read' })

      // If not granted, ask for it
      if (permission !== 'granted') {
        const request = await handle.requestPermission({ mode: 'read' })
        return setPermission(request === 'granted')
      }

      return setPermission(true) // already granted
    } catch (e) {
      console.error('Issue on permission check:', e)
      return setPermission(false)
    }
  }

  return { hasPermission, checkPermission }
}
