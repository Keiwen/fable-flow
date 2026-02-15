<script setup>
import LibraryPathSetup from '@/components/LibraryPathSetup'
import LibraryPathRestore from '@/components/LibraryPathRestore'
import { useRoute } from 'vue-router'
import { useLibraryLoader } from '@/composables/libraryLoader'
import LoaderDisplay from '@/components/LoaderDisplay'

const route = useRoute()

const { isLoading, loadedBooksCount } = useLibraryLoader()

const restoreOption = route.query.restore ?? false
</script>

<template>
  <div>
    <h1>Library setup</h1>
    <library-path-setup></library-path-setup>
    <library-path-restore v-if="restoreOption"></library-path-restore>
    <div v-if="isLoading">
      <loader-display></loader-display>
      <p>{{ loadedBooksCount }} books found</p>
    </div>
  </div>
</template>
