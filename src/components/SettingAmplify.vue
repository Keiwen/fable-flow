<script setup>
import { ref, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useAmplifySound } from '@/composables/amplifySound'

const store = useStore()

// data
const amplifyLevel = ref(0)

// watch
watch(amplifyLevel, async (newValue) => {
  if (!newValue || newValue === store.getters.amplifyLevel) return
  await store.dispatch('setAmplifyLevel', newValue)
  await useAmplifySound().changeLevel(newValue)
})

onMounted(async () => {
  amplifyLevel.value = store.getters.amplifyLevel
})
</script>

<template>
  <div>
    <label for="amplifyLevel">Amplify sound:</label>
    <select id="amplifyLevel" v-model="amplifyLevel">
      <option :value="1">Normal</option>
      <option :value="2">x2</option>
    </select>
  </div>
</template>

<style scoped lang="scss">

</style>
