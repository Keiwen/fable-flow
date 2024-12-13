import { ref } from 'vue'
import localforage from 'localforage'
import { PERSISTENCE_KEY } from '@/constants'

export function useStorageInstance () {
  const storageInstance = ref(null)

  const getStorageInstance = () => {
    if (!storageInstance.value) {
      storageInstance.value = localforage.createInstance({
        name: PERSISTENCE_KEY,
        storeName: 'application-data'
      })
    }
    return storageInstance.value
  }

  return { getStorageInstance }
}
