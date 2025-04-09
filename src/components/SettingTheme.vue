<script setup>
import { ref, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { EnhancedToggle } from 'vue-enhanced-check'

const store = useStore()

// data
const lightThemeOn = ref(false)

// watch
watch(lightThemeOn, async (newValue) => {
  const newTheme = newValue ? 'light' : 'dark'
  if (newTheme === store.getters.theme) return
  await store.dispatch('setTheme', newTheme)
})

onMounted(async () => {
  lightThemeOn.value = (store.getters.theme === 'light')
})
</script>

<template>
  <div>
    <label for="theme">Theme:</label>
    <enhanced-toggle label-on="light" label-off="dark"
                     style-on="fflight" style-off="ffdark"
                     v-model="lightThemeOn"
                     id="theme">
    </enhanced-toggle>
  </div>
</template>

<style lang="scss">

</style>
