<script setup>
import { ref, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { EnhancedToggle } from 'vue-enhanced-check'

const store = useStore()

// data
const autoplay = ref(false)

// watch
watch(autoplay, async (newValue) => {
  if (newValue === store.getters.autoplayNextChapter) return
  await store.dispatch('setAutoplayNextChapter', newValue)
})

onMounted(async () => {
  autoplay.value = store.getters.autoplayNextChapter
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
  </div>
</template>

<style lang="scss">

</style>
