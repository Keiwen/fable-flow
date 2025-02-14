<script setup>
import { ref, onMounted } from 'vue'
import { useFlashMessages } from '@/composables/flashMessages'
import AudioPlayerPlayButton from '@/components/AudioPlayerPlayButton'
import AudioPlayerRewindButton from '@/components/AudioPlayerRewindButton'
import AudioPlayerTimeview from '@/components/AudioPlayerTimeview'
import AudioPlayerTimeline from '@/components/AudioPlayerTimeline'

const { addErrorMessage } = useFlashMessages()

// data
const audioPlayer = ref(null)
const chapterSrc = ref(null)
const currentTime = ref(0)
const currentProgress = ref(0)
const playing = ref(false)
const duration = ref(0)
const initTrackTime = ref(0)

// methods
const playAudio = async () => {
  try {
    chapterSrc.value = './01 - Birds In The Sky.mp3'
    audioPlayer.value.controls = true
    // reload
    await audioPlayer.value.load()
    await audioPlayer.value.play()
    playing.value = true
  } catch (e) {
    addErrorMessage('Cannot start audio file')
    console.error(e)
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

onMounted(async () => {
  if (audioPlayer.value) {
    audioPlayer.value.addEventListener('timeupdate', audioPlayerTimeUpdate)
    audioPlayer.value.addEventListener('loadedmetadata', audioPlayerLoaded)
    audioPlayer.value.addEventListener('pause', audioPlayerPause)
    audioPlayer.value.addEventListener('play', audioPlayerPlay)
    audioPlayer.value.addEventListener('ended', audioPlayerEnded)
    audioPlayer.value.addEventListener('error', audioPlayerError)
  } else {
    addErrorMessage('Cannot initialize audio player')
  }
})

</script>

<template>
  <div>
    <div class="audio-player">
      <audio controls ref="audioPlayer">
        <source :src="chapterSrc">
      </audio>
    </div>
    <div class="chapter-control-container">
      <div>
      </div>
      <div class="custom-player-container">
        <audio-player-play-button :playing="playing" color="var(--primary)" @click-play="togglePlay"></audio-player-play-button>
        <audio-player-timeline :percent-progress="currentProgress" @change-progress="changeProgress"></audio-player-timeline>
        <audio-player-timeview :duration="duration" :current-time="currentTime"></audio-player-timeview>
        <audio-player-rewind-button color="var(--primary)" @click-rewind="trackTimeBack(10)"></audio-player-rewind-button>
      </div>
      <div>
        <button class="btn-secondary" @click="playAudio">Play from URL</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
