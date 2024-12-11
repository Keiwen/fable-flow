<script setup>
import { computed } from 'vue'

const props = defineProps({
  playing: { type: Boolean, default: false },
  color: { type: String, default: 'white' }
})
const emit = defineEmits(['click-play'])

// computed
const divClass = computed(() => {
  let divClass = 'play-button'
  if (props.playing) {
    divClass += ' play-button-playing'
  }
  return divClass
})

// methods
const clickOnPlay = () => {
  emit('click-play')
}

</script>

<template>
  <div :class="divClass" @click="clickOnPlay()" role="button" :aria-label="playing ? 'Pause track' : 'Play track'">
    <svg id="play" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
         viewBox="0 0 100 100" xml:space="preserve">
      <path class="play-border play-border-solid" fill="none" :stroke="color"
            d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"
      />
      <path class="play-border play-border-dotted" fill="none" :stroke="color"
            d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"
      />
      <path class="play-icon" :fill="color"
            d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
      />
      <path class="pause-icon" :fill="color"
            d="M37.5 21.875a3.125 3.125 0 0 1 3.125 3.125v50a3.125 3.125 0 0 1 -6.25 0V25a3.125 3.125 0 0 1 3.125 -3.125zm25 0a3.125 3.125 0 0 1 3.125 3.125v50a3.125 3.125 0 0 1 -6.25 0V25a3.125 3.125 0 0 1 3.125 -3.125z"
      />
    </svg>
  </div>
</template>

<style lang="scss">

</style>
