<script setup>
import { useDisplayFilters } from '@/composables/displayFilters'

const { time } = useDisplayFilters()

defineProps({
  duration: { type: Number, default: 0 },
  currentTime: { type: Number, default: 0 }
})

const getDisplayTime = (timeInSecond) => {
  return time(timeInSecond)
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
