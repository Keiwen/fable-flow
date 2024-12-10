<template>
  <div>
    <h1>Library setup</h1>
    <library-path-setup></library-path-setup>
  </div>
</template>

<script>
import LibraryPathSetup from '@/components/LibraryPathSetup'

export default {
  name: 'SetupView',
  components: {
    LibraryPathSetup
  }
}
</script>
