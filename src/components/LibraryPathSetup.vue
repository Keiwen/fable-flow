<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useHandlePermission } from '@/composables/handlePermission'
import { useLibraryLoader } from '@/composables/libraryLoader'
import { useFlashMessages } from '@/composables/flashMessages'

const { hasPermission } = useHandlePermission()
const { libraryHandle, loadLibrary } = useLibraryLoader()
const { addErrorMessage } = useFlashMessages()
const router = useRouter()

// computed
const libraryName = computed(() => libraryHandle.value ? libraryHandle.value.name : '')

// methods
const selectPath = async () => {
  try {
    if ('showDirectoryPicker' in window) {
      const selectedHandle = await window.showDirectoryPicker() // display directory picker for user
      const hasPermissionOnHandle = await hasPermission(selectedHandle)
      // if granted, update store
      if (hasPermissionOnHandle) {
        await loadLibrary(selectedHandle)
        router.push({ name: 'chapter' })
      }
    } else {
      addErrorMessage('Unfortunately, your browser does not support this functionality. Please try with Chrome > 132.')
    }
  } catch (e) {
    addErrorMessage('An error occurred on library selection')
    console.error(e)
  }
}
</script>

<template>
  <div>
    <p v-if="libraryName">
      Current directory is set to {{ libraryName }}
    </p>
    <p v-else>
      No directory set
    </p>
    <p class="help" v-if="!libraryName">
      Choose a directory from your device where your audio books are stored.
      Fable Flow will request read access to it.
      No files nor folder will be modified by Fable Flow.
      You'll be able to revoke its access at any time from your device settings.
    </p>
    <p>
      <button class="btn-primary" @click="selectPath">Select a directory as library</button>
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>
