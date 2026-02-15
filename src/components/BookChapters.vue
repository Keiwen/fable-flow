<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useLibraryLoader } from '@/composables/libraryLoader'

const store = useStore()
const { getChaptersFromBook } = useLibraryLoader()

// computed
const currentAuthor = computed(() => store.getters.author)
const currentBook = computed(() => store.getters.book)
const currentChapterIndex = computed(() => store.getters.getChapterIndex(currentAuthor.value, currentBook.value))
const chapters = computed(() => getChaptersFromBook(currentAuthor.value, currentBook.value))

</script>

<template>
  <div>
    <ul>
      <li v-for="(name, index) in chapters" :key="index" :class="index === currentChapterIndex ? 'current' : ''">{{ name }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
ul {
  text-align: justify;
  list-style: none;
  padding-inline-start: 0;
  li {
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid var(--main-color);
    &.current {
      border-color: var(--primary);
    }
  }
}
</style>
