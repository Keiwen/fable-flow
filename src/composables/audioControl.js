import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useFlashMessages } from '@/composables/flashMessages'
import { useLibraryLoader } from '@/composables/libraryLoader'
import { useMediaSession } from '@/composables/mediaSession'
import { useAmplifySound } from '@/composables/amplifySound'

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
  const currentChapterIndex = computed(() => store.getters.getChapterIndex())
  const currentChapter = computed(() => getChapterFromBook(currentAuthor.value, currentBook.value, currentChapterIndex.value))
  const autoplayNextChapter = computed(() => store.getters.autoplayNextChapter)
  const displayChapterTitle = computed(() => store.getters.displayChapterTitle)
  const autoRewindOnPause = computed(() => store.getters.autoRewindOnPause)

  const initializeAudioPlayer = async (audioPlayerElmt) => {
    audioPlayer.value = audioPlayerElmt
    audioPlayer.value.addEventListener('timeupdate', audioPlayerTimeUpdate)
    audioPlayer.value.addEventListener('loadedmetadata', audioPlayerLoaded)
    audioPlayer.value.addEventListener('pause', audioPlayerPause)
    audioPlayer.value.addEventListener('play', audioPlayerPlay)
    audioPlayer.value.addEventListener('ended', audioPlayerEnded)
    audioPlayer.value.addEventListener('error', audioPlayerError)
    useAmplifySound().initializeAmplifier(audioPlayer.value)
    if (currentChapter.value) {
      await playChapter(currentChapter.value, false)
      const storedTrackTime = store.getters.getTrackTime()
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
    if (!audioPlayer.value) return
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
      const mediaTitle = displayChapterTitle.value ? currentChapter.value.name : 'Chapter ' + currentChapterIndex.value
      useMediaSession().setup(currentAuthor.value, currentBook.value, mediaTitle)
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
    if (!audioPlayer.value) return
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

  const previousChapter = async () => {
    if (!audioPlayer.value) return
    initTrackTime.value = 0
    const previousIndex = currentChapterIndex.value - 1
    const previousChapter = getChapterFromBook(currentAuthor.value, currentBook.value, previousIndex)
    if (previousChapter) {
      await stopAudio()
      await store.dispatch('selectChapterIndex', previousIndex)
      await playChapter(previousChapter)
    } else {
      addWarningMessage('This is the first chapter')
    }
  }

  const startBook = async () => {
    if (!audioPlayer.value) return
    initTrackTime.value = 0
    await stopAudio()
    await store.dispatch('selectChapterIndex', 0)
    playChapter(currentChapter.value)
  }

  const trackTimeBack = (backTime) => {
    if (!audioPlayer.value) return
    if (!backTime) backTime = 10
    audioPlayer.value.currentTime -= backTime
    // if below 0, it is set to 0
  }

  const changeProgress = (percentProgress) => {
    if (!audioPlayer.value) return
    audioPlayer.value.currentTime = (parseInt(percentProgress) / 100) * audioPlayer.value.duration
  }

  const togglePlay = () => {
    if (!audioPlayer.value) return
    if (audioPlayer.value.paused) {
      audioPlayer.value.play()
    } else {
      audioPlayer.value.pause()
    }
    playing.value = !playing.value
  }

  const audioPlayerTimeUpdate = (e) => {
    if (!audioPlayer.value) return
    // note: previous check is important, we may have this event called on nav while audio player became null
    currentTime.value = Math.floor(audioPlayer.value.currentTime)
    currentProgress.value = Math.round((audioPlayer.value.currentTime / audioPlayer.value.duration) * 100)
    useMediaSession().updateProgress(audioPlayer.value.currentTime, audioPlayer.value.duration)
  }

  const audioPlayerPause = (e) => {
    playing.value = false

    if (autoRewindOnPause.value) {
      // only if end not reached
      if (audioPlayer.value.currentTime !== audioPlayer.value.duration) {
        trackTimeBack()
      }
    }
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
    if (!audioPlayer.value) return
    duration.value = audioPlayer.value.duration
    audioPlayer.value.currentTime = initTrackTime.value
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
    previousChapter,
    startBook,
    trackTimeBack,
    changeProgress,
    togglePlay
  }
}
