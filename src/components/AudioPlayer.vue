<script setup>
import { ref, onMounted } from 'vue'
import { useFlashMessages } from '@/composables/flashMessages'
import { useAudioControl } from '@/composables/audioControl'
import { useAmplifySound } from '@/composables/amplifySound'
import AudioPlayerPlayButton from '@/components/AudioPlayerPlayButton'
import AudioPlayerRewindButton from '@/components/AudioPlayerRewindButton'
import AudioPlayerTimeview from '@/components/AudioPlayerTimeview'
import AudioPlayerTimeline from '@/components/AudioPlayerTimeline'

const { addErrorMessage } = useFlashMessages()

// data
const audioPlayer = ref(null)
const audioControl = useAudioControl()
const playing = audioControl.playing
const currentProgress = audioControl.currentProgress
const duration = audioControl.duration
const currentTime = audioControl.currentTime

onMounted(async () => {
  if (audioPlayer.value) {
    audioControl.initializeAudioPlayer(audioPlayer.value)

    useAmplifySound().initializeAmplifier(audioPlayer.value)
  } else {
    addErrorMessage('Cannot initialize audio player')
  }
})

</script>

<template>
  <div>
    <div class="audio-player">
      <audio controls ref="audioPlayer">
        <source :src="audioControl.chapterSrc.value">
      </audio>
    </div>
    <div class="chapter-control-container">
      <div>
        <button class="btn-warning" @click="audioControl.startBook">Start book over</button>
      </div>
      <div class="custom-player-container">
        <audio-player-play-button :playing="playing" color="var(--primary)" @click-play="audioControl.togglePlay"></audio-player-play-button>
        <audio-player-timeline :percent-progress="currentProgress" @change-progress="audioControl.changeProgress"></audio-player-timeline>
        <audio-player-timeview :duration="duration" :current-time="currentTime"></audio-player-timeview>
        <audio-player-rewind-button color="var(--primary)" @click-rewind="audioControl.trackTimeBack(10)"></audio-player-rewind-button>
      </div>
      <div>
        <button class="btn-secondary" @click="audioControl.nextChapter">Next chapter</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  audio {
    display: none;
  }
</style>
