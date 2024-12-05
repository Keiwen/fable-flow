<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// data
const selectedAuthor = ref('')

// computed
const authors = computed(() => store.getters.authorsList)

// watch
watch(selectedAuthor, async (newValue) => {
  if (!newValue || newValue === store.getters.currentAuthor) return
  store.dispatch('updateCurrentAuthor', newValue)
})

onMounted(async () => {
  selectedAuthor.value = store.getters.currentAuthor
})
</script>

<template>
  <div>
    <p>
      Current author is set to {{ selectedAuthor }}
    </p>
    <p>
      Select author:
      <select v-model="selectedAuthor">
        <option v-for="author in authors" :key="author" :value="author">
          {{ author }}
        </option>
      </select>
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>
