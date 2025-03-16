import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useFlashMessages } from '@/composables/flashMessages'
import { useLibraryLoader } from '@/composables/libraryLoader'
import { useMediaSession } from '@/composables/mediaSession'

const audioPlayer = ref(null)

export function useAudioControl () {
  const store = useStore()
  const { getChapterFromBook } = useLibraryLoader()
  const { addWarningMessage, addErrorMessage } = useFlashMessages()
  const chapterSrc = ref(null)
  const initTrackTime = ref(0)
  const duration = ref(0)
  const currentTime = ref(0)
  const currentProgress = ref(0)
  const playing = ref(false)
  const currentAuthor = computed(() => store.getters.author)
  const currentBook = computed(() => store.getters.book)
  const currentChapterIndex = computed(() => store.getters.chapterIndex)
  const currentChapter = computed(() => getChapterFromBook(currentAuthor.value, currentBook.value, currentChapterIndex.value))
  const autoplayNextChapter = computed(() => store.getters.autoplayNextChapter)

  const initializeAudioPlayer = async (audioPlayerElmt) => {
    audioPlayer.value = audioPlayerElmt
    audioPlayer.value.addEventListener('timeupdate', audioPlayerTimeUpdate)
    audioPlayer.value.addEventListener('loadedmetadata', audioPlayerLoaded)
    audioPlayer.value.addEventListener('pause', audioPlayerPause)
    audioPlayer.value.addEventListener('play', audioPlayerPlay)
    audioPlayer.value.addEventListener('ended', audioPlayerEnded)
    audioPlayer.value.addEventListener('error', audioPlayerError)
    if (currentChapter.value) {
      await playChapter(currentChapter.value, false)
      const storedTrackTime = store.getters.trackTime
      if (storedTrackTime) {
        initTrackTime.value = storedTrackTime
      }
    }
  }

  const stopAudio = async () => {
    if (!audioPlayer.value) return
    await audioPlayer.value.pause()
    currentTime.value = 0
    currentProgress.value = 0
    playing.value = false
  }

  const playChapter = async (chapterHandle, autoPlay = true) => {
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
      await audioPlayer.value.load()
      useMediaSession().setup(currentAuthor.value, currentBook.value, currentChapter.value.name)
      if (autoPlay) {
        await audioPlayer.value.play()
        playing.value = true
      }
    } catch (e) {
      addErrorMessage('Cannot start audio file')
      console.error(e)
    }
  }

  const nextChapter = async () => {
    initTrackTime.value = 0
    const nextIndex = currentChapterIndex.value + 1
    const nextChapter = getChapterFromBook(currentAuthor.value, currentBook.value, nextIndex)
    if (nextChapter) {
      await stopAudio()
      await store.dispatch('selectChapterIndex', nextIndex)
      await playChapter(nextChapter)
    } else {
      addWarningMessage('This is the last chapter')
    }
  }

  const startBook = async () => {
    initTrackTime.value = 0
    await stopAudio()
    await store.dispatch('selectChapterIndex', 0)
    playChapter(currentChapter.value)
  }

  const trackTimeBack = (backTime) => {
    if (audioPlayer.value) {
      audioPlayer.value.currentTime -= backTime
      // if below 0, it is set to 0
    }
  }

  const changeProgress = (percentProgress) => {
    if (audioPlayer.value) {
      audioPlayer.value.currentTime = (parseInt(percentProgress) / 100) * audioPlayer.value.duration
    }
  }

  const togglePlay = () => {
    if (audioPlayer.value) {
      if (audioPlayer.value.paused) {
        audioPlayer.value.play()
      } else {
        audioPlayer.value.pause()
      }
      playing.value = !playing.value
    }
  }

  const audioPlayerTimeUpdate = (e) => {
    // check that audio player is still there, we may have this event called on nav while audio player became null
    if (audioPlayer.value) {
      currentTime.value = Math.floor(audioPlayer.value.currentTime)
      currentProgress.value = Math.round((audioPlayer.value.currentTime / audioPlayer.value.duration) * 100)
    }
  }

  const audioPlayerPause = (e) => {
    playing.value = false
  }

  const audioPlayerPlay = (e) => {
    playing.value = true
  }

  const audioPlayerEnded = (e) => {
    playing.value = false
    if (autoplayNextChapter.value) {
      nextChapter()
    }
  }

  const audioPlayerError = (e) => {
    playing.value = false
    addErrorMessage('An error occurred on audio player')
    console.error(e)
  }

  const audioPlayerLoaded = (e) => {
    if (audioPlayer.value) {
      duration.value = audioPlayer.value.duration
      audioPlayer.value.currentTime = initTrackTime.value
    }
  }

  watch(currentTime, (newValue, oldValue) => {
    if (newValue !== oldValue) {
      store.dispatch('updateTrackTime', newValue)
    }
  })

  return {
    chapterSrc,
    initTrackTime,
    duration,
    currentTime,
    currentProgress,
    playing,
    initializeAudioPlayer,
    stopAudio,
    playChapter,
    nextChapter,
    startBook,
    trackTimeBack,
    changeProgress,
    togglePlay
  }
}
