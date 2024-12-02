export async function checkPermission (handle) {
  if (!handle) {
    return false
  }

  try {
    // Check current
    const permission = await handle.queryPermission({ mode: 'read' })

    // If not granted, ask for it
    if (permission !== 'granted') {
      const request = await handle.requestPermission({ mode: 'read' })
      return request === 'granted'
    }

    return true // already granted
  } catch (e) {
    console.error('Issue on permission check:', e)
    return false
  }
}
