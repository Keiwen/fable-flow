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
const firstChapter = computed(() => store.getters.getChapterFromBook(currentAuthor.value, currentBook.value, 0))

// methods
const startFirstChapter = async () => {
  if (!firstChapter.value) {
    console.error('No chapter found')
    return
  }
  try {
    const audioFile = await firstChapter.value.getFile()
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
    <p>First chapter is {{ firstChapter ? firstChapter.name : '' }}</p>
    <p>
      <button @click="startFirstChapter">Play first chapter</button>
    </p>
    <div>
      <audio controls ref="audioPlayer">
        <source :src="chapterSrc">
      </audio>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
