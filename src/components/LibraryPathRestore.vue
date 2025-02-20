<script setup>
import { useRouter } from 'vue-router'
import { useHandlePermission } from '@/composables/handlePermission'
import { useLibraryLoader } from '@/composables/libraryLoader'
import { useFlashMessages } from '@/composables/flashMessages'

const { hasPermission } = useHandlePermission()
const { libraryHandle, loadLibrary } = useLibraryLoader()
const { addErrorMessage } = useFlashMessages()
const router = useRouter()

// methods
const restoreLibrary = async () => {
  try {
    const hasPermissionOnHandle = await hasPermission(libraryHandle.value)
    if (hasPermissionOnHandle) {
      await loadLibrary(libraryHandle.value)
      router.push({ name: 'chapter' })
    }
  } catch (e) {
    addErrorMessage('An error occurred on library selection')
    console.error(e)
  }
}
</script>

<template>
  <div>
    <p class="help">
      Permission granted to your library has expired.
      Click on below button to restore it!
    </p>
    <p>
      <button class="btn-secondary" @click="restoreLibrary">Restore permission</button>
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>
