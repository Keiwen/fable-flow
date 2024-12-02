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
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LibratyPathSetup',
  computed: {
    ...mapGetters(['hasLibraryDefined', 'getLibraryDirectory'])
  },
  methods: {
    ...mapActions(['updateLibraryHandle', 'checkLibraryPermission']),
    // next method is async as we need to wait for user input
    async selectPath () {
      try {
        const handle = await window.showDirectoryPicker() // display directory picker for user
        this.updateLibraryHandle(handle)
        this.runLibraryPermissionCheck()
      } catch (e) {
        console.error('Error on library path selection:', e)
      }
    },
    runLibraryPermissionCheck () {
      if (!this.hasLibraryDefined) return
      this.checkLibraryPermission()
        .then(hasPermission => {
          if (!hasPermission) {
            console.error('No permission for library')
          }
        })
        .catch(e => {
          console.error('Error on permission check:', e)
        })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
