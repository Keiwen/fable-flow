<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useHandlePermission } from '@/composables/handlePermission'

const store = useStore()
const { hasPermission } = useHandlePermission()

// computed
const libraryName = computed(() => store.getters.libraryName)

// methods
const selectPath = async () => {
  try {
    const selectedHandle = await window.showDirectoryPicker() // display directory picker for user
    const hasPermissionOnHandle = await hasPermission(selectedHandle)
    // if granted, update store
    if (hasPermissionOnHandle) {
      store.dispatch('updateLibraryHandle', selectedHandle)
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
