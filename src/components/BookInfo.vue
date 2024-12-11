<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useLibraryLoader } from '@/composables/libraryLoader'

const store = useStore()
const { getChaptersFromBook } = useLibraryLoader()

// computed
const currentAuthor = computed(() => store.getters.author)
const currentBook = computed(() => store.getters.book)
const chapters = computed(() => getChaptersFromBook(currentAuthor.value, currentBook.value))
const chapterCount = computed(() => chapters.value.length)

</script>

<template>
  <div>
    <p>
      {{ currentAuthor }}: {{ currentBook }} ({{ chapterCount }} chapters)
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>
