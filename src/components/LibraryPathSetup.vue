<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useHandlePermission } from '@/composables/handlePermission'

const store = useStore()
const { hasPermission } = useHandlePermission()

// computed
const getLibraryDirectory = computed(() => store.getters.getLibraryDirectory)

// methods
const selectPath = async () => {
  try {
    const selectedHandle = await window.showDirectoryPicker() // display directory picker for user
    const hasPermissionOnHandle = await hasPermission(selectedHandle)
    // if granted, update store
    if (hasPermissionOnHandle) {
      store.dispatch('updateLibraryName', selectedHandle.name)
    }
  } catch (e) {
    console.error('Error on library path selection:', e)
  }
}
</script>

<template>
  <div>
    <p>
      Current directory is set to {{ getLibraryDirectory }}
    </p>
    <p>
      <button @click="selectPath">Select a directory as library</button>
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>
