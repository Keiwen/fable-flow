<script setup>
import { useStore } from 'vuex'

const store = useStore()

defineProps({
  duration: { type: Number, default: 0 },
  currentTime: { type: Number, default: 0 }
})

const getDisplayTime = (timeInSecond) => {
  return store.getters.getDisplayTime(timeInSecond)
}

</script>

<template>
  <div class="custom-player-time">
    <span class="custom-player-current-time">{{ getDisplayTime(currentTime) }}</span>
    /
    <span class="custom-player-duration">{{ getDisplayTime(duration) }}</span>
  </div>
</template>

<style scoped lang="scss">

</style>
