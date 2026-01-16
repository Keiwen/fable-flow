<script setup>
import LibraryPathSetup from '@/components/LibraryPathSetup'
import LibraryPathRestore from '@/components/LibraryPathRestore'
import { useRoute } from 'vue-router'
import { useLibraryLoader } from '@/composables/libraryLoader'

const route = useRoute()

const { isLoading, loadedBooksCount } = useLibraryLoader()

const restoreOption = route.query.restore ?? false
</script>

<template>
  <div>
    <h1>Library setup</h1>
    <library-path-setup></library-path-setup>
    <library-path-restore v-if="restoreOption"></library-path-restore>
    <p v-if="isLoading">Loading... {{ loadedBooksCount }} books found</p>
  </div>
</template>
