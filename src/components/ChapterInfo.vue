<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// data
const audioPlayer = ref(null)
const chapterSrc = ref(null)

// computed
const currentAuthor = computed(() => store.getters.currentAuthor)
const currentBook = computed(() => store.getters.currentBook)
const chapters = computed(() => store.getters.getChaptersFromBook(currentAuthor.value, currentBook.value))
const chapterCount = computed(() => chapters.value.length)
const currentChapterIndex = computed(() => store.getters.currentChapterIndex)
const currentChapter = computed(() => store.getters.getCurrentChapter())

// methods
const startBook = () => {
  const firstChapter = store.getters.getChapterFromBook(currentAuthor.value, currentBook.value, 0)
  store.dispatch('updateCurrentChapterIndex', 0)
  playChapter(firstChapter)
}

const resumeBook = () => {
  playChapter(currentChapter.value)
}

const nextChapter = async () => {
  const nextIndex = currentChapterIndex.value + 1
  const nextChapter = store.getters.getChapterFromBook(currentAuthor.value, currentBook.value, nextIndex)
  if (nextChapter) {
    store.dispatch('updateCurrentChapterIndex', nextIndex)
    playChapter(nextChapter)
  }
}

const playChapter = async (chapterHandle) => {
  if (!chapterHandle) {
    console.error('No chapter found')
    return
  }
  try {
    const audioFile = await chapterHandle.getFile()
    // clean previous value
    if (chapterSrc.value) {
      URL.revokeObjectURL(chapterSrc.value)
    }
    chapterSrc.value = URL.createObjectURL(audioFile)
    // reload
    audioPlayer.value.load()
    audioPlayer.value.play()
  } catch (e) {
    console.error('Cannot start audio file', e)
  }
}

onMounted(async () => {
  if (audioPlayer.value) {
    console.log('audio player initialized')
  }
})
</script>

<template>
  <div>
    <p>
      Current book have {{ chapterCount }} chapters
    </p>
    <p>Current chapter is {{ currentChapter ? currentChapter.name : '' }}</p>
    <p>
      <button @click="startBook">Start book over</button>
      <button @click="resumeBook">Resume book</button>
    </p>
    <div>
      <audio controls ref="audioPlayer">
        <source :src="chapterSrc">
      </audio>
    </div>
    <p>
      <button @click="nextChapter">Next chapter</button>
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>
