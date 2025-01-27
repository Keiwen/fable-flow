<script setup>
// computed
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useLibraryLoader } from '@/composables/libraryLoader'

const store = useStore()
const { getChapterFromBook } = useLibraryLoader()

const currentAuthor = computed(() => store.getters.author)
const currentBook = computed(() => store.getters.book)
const currentChapterIndex = computed(() => store.getters.chapterIndex)
const currentChapter = computed(() => getChapterFromBook(currentAuthor.value, currentBook.value, currentChapterIndex.value))

// methods
const playAudio = async () => {
  const audioFile = await currentChapter.value.getFile()
  const audioUrl = URL.createObjectURL(audioFile)
  const audio = new Audio(audioUrl)
  audio.play()
}

</script>

<template>
  <div>
    <button class="btn-secondary" @click="playAudio">Play raw chapter</button>
  </div>
</template>

<style scoped lang="scss">
</style>
