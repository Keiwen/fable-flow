<script setup>
// methods
const playAudio = async () => {
  const audioUrl = require('@/assets/01 - Birds In The Sky.mp3')
  const audio = new Audio(audioUrl)
  audio.play()
}
</script>

<template>
  <div>
    <button class="btn-secondary" @click="playAudio">Play raw local</button>
  </div>
</template>

<style scoped lang="scss">
</style>
