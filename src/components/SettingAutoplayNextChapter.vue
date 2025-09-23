<script setup>
import { ref, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { EnhancedToggle } from 'vue-enhanced-check'

const store = useStore()

// data
const autoplay = ref(false)
const soundplay = ref(false)

// watch
watch(autoplay, async (newValue) => {
  if (newValue === store.getters.autoplayNextChapter) return
  await store.dispatch('setAutoplayNextChapter', newValue)
})
watch(soundplay, async (newValue) => {
  if (newValue === store.getters.pageturnSoundPlay) return
  await store.dispatch('setPageturnSoundPlay', newValue)
})

onMounted(async () => {
  autoplay.value = store.getters.autoplayNextChapter
  soundplay.value = store.getters.pageturnSoundPlay
})
</script>

<template>
  <div>
    <label for="autoplayNextChapter">When chapter ends:</label>
    <enhanced-toggle label-on="play next" label-off="pause playback"
                     style-on="ffon" style-off="ffoff"
                     v-model="autoplay"
                     id="autoplayNextChapter">
    </enhanced-toggle>
    <enhanced-toggle label-on="pageturn sound" label-off="no sound"
                     style-on="ffon" style-off="ffoff"
                     v-model="soundplay"
                     id="playPageturnSound">
    </enhanced-toggle>
  </div>
</template>

<style lang="scss">

</style>
