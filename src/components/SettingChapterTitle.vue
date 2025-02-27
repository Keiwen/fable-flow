<script setup>
import { ref, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { EnhancedToggle } from 'vue-enhanced-check'

const store = useStore()

// data
const displayTitle = ref(false)

// watch
watch(displayTitle, async (newValue) => {
  if (newValue === store.getters.displayChapterTitle) return
  await store.dispatch('setDisplayChapterTitle', newValue)
})

onMounted(async () => {
  displayTitle.value = store.getters.displayChapterTitle
})
</script>

<template>
  <div>
    <label for="displayChapterTitle">Chapter title is:</label>
    <enhanced-toggle label-on="displayed" label-off="hidden"
                     style-on="ffon" style-off="ffoff"
                     v-model="displayTitle"
                     id="displayChapterTitle">
    </enhanced-toggle>
  </div>
</template>

<style lang="scss">

</style>
