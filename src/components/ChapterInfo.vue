<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useLibraryLoader } from '@/composables/libraryLoader'
import { useFlashMessages } from '@/composables/flashMessages'

const store = useStore()
const { getChaptersFromBook, getChapterFromBook } = useLibraryLoader()
const { addWarningMessage, addErrorMessage } = useFlashMessages()

// data
const audioPlayer = ref(null)
const chapterSrc = ref(null)

// computed
const currentAuthor = computed(() => store.getters.author)
const currentBook = computed(() => store.getters.book)
const chapters = computed(() => getChaptersFromBook(currentAuthor.value, currentBook.value))
const chapterCount = computed(() => chapters.value.length)
const currentChapterIndex = computed(() => store.getters.chapterIndex)
const currentChapter = computed(() => getChapterFromBook(currentAuthor.value, currentBook.value, currentChapterIndex.value))

// methods
const startBook = async () => {
  await store.dispatch('selectChapterIndex', 0)
  playChapter(currentChapter.value)
}

const resumeBook = () => {
  playChapter(currentChapter.value)
}

const nextChapter = async () => {
  const nextIndex = currentChapterIndex.value + 1
  const nextChapter = getChapterFromBook(currentAuthor.value, currentBook.value, nextIndex)
  if (nextChapter) {
    store.dispatch('selectChapterIndex', nextIndex)
    playChapter(nextChapter)
  } else {
    addWarningMessage('This is the last chapter')
  }
}

const playChapter = async (chapterHandle) => {
  if (!chapterHandle) {
    addErrorMessage('No chapter found')
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
    addErrorMessage('Cannot start audio file')
    console.error(e)
  }
}
</script>

<template>
  <div>
    <div>
      <audio controls ref="audioPlayer">
        <source :src="chapterSrc">
      </audio>
    </div>
    <p>
      {{ currentAuthor }}: {{ currentBook }}
    </p>
    <p>
      Chapter {{ currentChapterIndex + 1 }}/{{ chapterCount }}:
      {{ currentChapter ? currentChapter.name : '' }}
    </p>
    <p>
      <button class="btn-warning" @click="startBook">Start book over</button>
      <button class="btn-success" @click="resumeBook">Resume book</button>
    </p>
    <p>
      <button class="btn-info" @click="nextChapter">Next chapter</button>
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>
