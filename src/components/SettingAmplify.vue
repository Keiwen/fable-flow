<script setup>
import { ref, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useAmplifySound } from '@/composables/amplifySound'
import { EnhancedToggle } from 'vue-enhanced-check'

const store = useStore()

// data
const amplifySound = ref(false)

// watch
watch(amplifySound, async (newValue) => {
  if (newValue === store.getters.amplifySound) return
  await store.dispatch('setAmplifySound', newValue)
  await useAmplifySound().changeLevel(newValue ? 2 : 1)
})

onMounted(async () => {
  amplifySound.value = store.getters.amplifySound
})
</script>

<template>
  <div>
    <label for="amplifySound">Sound is:</label>
    <enhanced-toggle label-on="amplified x2" label-off="normal"
                     style-on="ffon" style-off="ffoff"
                     v-model="amplifySound"
                     id="amplifySound">
    </enhanced-toggle>
  </div>
</template>

<style scoped lang="scss">

</style>
