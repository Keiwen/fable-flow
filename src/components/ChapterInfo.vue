<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useFolderBrowser } from '@/composables/folderBrowser'

const store = useStore()
const { getChaptersHandles } = useFolderBrowser()

// data
const chapterHandles = ref([])
const audioPlayer = ref(null)
const chapterSrc = ref(null)

// computed
const currentAuthor = computed(() => store.getters.getCurrentAuthor)
const currentBook = computed(() => store.getters.getCurrentBook)
const chapterCount = computed(() => chapterHandles.value.length)
const firstChapter = computed(() => {
  if (!chapterCount.value) return { name: '', handle: null }
  return chapterHandles.value[0]
})

// methods
const startFirstChapter = async () => {
  if (!firstChapter.value.handle) {
    console.error('No chapter found')
    return
  }
  try {
    const audioFile = await firstChapter.value.handle.getFile()
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
  chapterHandles.value = await getChaptersHandles(currentAuthor.value, currentBook.value)
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
    <p>First chapter is {{ firstChapter.name }}</p>
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
