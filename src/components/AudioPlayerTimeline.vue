<script setup>
import { computed } from 'vue'

const props = defineProps({
  percentProgress: { type: Number, required: true }
})
const emit = defineEmits(['changeProgress'])

// computed
const cssVars = computed(() => {
  return {
    '--custom-player-percent-progress': props.percentProgress + '%'
  }
})

// methods
const changeTime = (e) => {
  emit('changeProgress', e.srcElement.value)
}

</script>

<template>
  <div class="custom-player-timeline" :style="cssVars">
    <input type="range" max="100" :value="percentProgress" @change="changeTime" aria-label="Player timeline">
  </div>
</template>

<style scoped lang="scss">

</style>
