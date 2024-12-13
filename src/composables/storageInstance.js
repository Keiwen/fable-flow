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

  const getLibraryHandle = async () => {
    const instance = getStorageInstance()
    return await instance.getItem('libraryHandle')
  }

  const setLibraryHandle = async (value) => {
    const instance = getStorageInstance()
    return await instance.setItem('libraryHandle', value)
  }

  return { getStorageInstance, getLibraryHandle, setLibraryHandle }
}
