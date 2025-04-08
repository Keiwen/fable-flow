<script setup>
import { ref, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { EnhancedToggle } from 'vue-enhanced-check'

const store = useStore()

// data
const autoRewind = ref(false)

// watch
watch(autoRewind, async (newValue) => {
  if (newValue === store.getters.autoRewindOnPause) return
  await store.dispatch('setAutoRewindOnPause', newValue)
})

onMounted(async () => {
  autoRewind.value = store.getters.autoRewindOnPause
})
</script>

<template>
  <div>
    <label for="autoRewindOnPause">When player is paused:</label>
    <enhanced-toggle label-on="auto rewind 10 s" label-off="keep current progression"
                     style-on="ffon" style-off="ffoff"
                     v-model="autoRewind"
                     id="autoRewindOnPause">
    </enhanced-toggle>
  </div>
</template>

<style lang="scss">

</style>
