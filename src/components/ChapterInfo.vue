<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useLibraryLoader } from '@/composables/libraryLoader'

const store = useStore()
const { getChapterFromBook } = useLibraryLoader()

// computed
const currentAuthor = computed(() => store.getters.author)
const currentBook = computed(() => store.getters.book)
const currentChapterIndex = computed(() => store.getters.getChapterIndex())
const currentChapter = computed(() => getChapterFromBook(currentAuthor.value, currentBook.value, currentChapterIndex.value))

</script>

<template>
  <div>
    <p>
      {{ currentChapter ? currentChapter.name : '' }}
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>
