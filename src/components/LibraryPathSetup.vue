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

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { usePermission } from '@/composables/usePermission'

export default {
  name: 'LibratyPathSetup',
  setup () {
    const store = useStore()
    const { checkPermission } = usePermission()

    // computed
    const getLibraryDirectory = computed(() => store.getters.getLibraryDirectory)

    // methods
    const selectPath = async () => {
      try {
        const handle = await window.showDirectoryPicker() // display directory picker for user
        const hasPermission = await checkPermission(handle)
        // if granted, update store
        if (hasPermission) {
          store.dispatch('updateLibraryHandle', handle)
        }
      } catch (e) {
        console.error('Error on library path selection:', e)
      }
    }

    return {
      getLibraryDirectory,
      selectPath
    }
  }
}
</script>

<style scoped lang="scss">

</style>
