<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useLibraryLoader } from '@/composables/libraryLoader'

const store = useStore()
const { getChaptersFromBook, getChapterFromBook } = useLibraryLoader()

// computed
const currentAuthor = computed(() => store.getters.author)
const currentBook = computed(() => store.getters.book)
const chapters = computed(() => getChaptersFromBook(currentAuthor.value, currentBook.value))
const chapterCount = computed(() => chapters.value.length)
const currentChapterIndex = computed(() => store.getters.chapterIndex)
const currentChapter = computed(() => getChapterFromBook(currentAuthor.value, currentBook.value, currentChapterIndex.value))

</script>

<template>
  <div>
    <p>
      {{ currentAuthor }}: {{ currentBook }} ({{ chapterCount }} chapters)
    </p>
    <p>
      {{ currentChapter ? currentChapter.name : '' }}
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>
