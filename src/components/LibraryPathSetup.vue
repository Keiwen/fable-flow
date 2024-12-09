<script setup>
import { computed } from 'vue'
import { useHandlePermission } from '@/composables/handlePermission'
import { useLibraryLoader } from '@/composables/libraryLoader'

const { hasPermission } = useHandlePermission()
const { libraryHandle, loadLibrary } = useLibraryLoader()

// computed
const libraryName = computed(() => libraryHandle.value ? libraryHandle.value.name : '')

// methods
const selectPath = async () => {
  try {
    const selectedHandle = await window.showDirectoryPicker() // display directory picker for user
    const hasPermissionOnHandle = await hasPermission(selectedHandle)
    // if granted, update store
    if (hasPermissionOnHandle) {
      loadLibrary(selectedHandle)
    }
  } catch (e) {
    console.error('Error on library path selection:', e)
  }
}
</script>

<template>
  <div>
    <p>
      Current directory is set to {{ libraryName }}
    </p>
    <p>
      <button @click="selectPath">Select a directory as library</button>
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>
