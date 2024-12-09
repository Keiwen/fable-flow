<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useStore } from 'vuex'
import { useLibraryLoader } from '@/composables/libraryLoader'

const store = useStore()
const { getAuthorsList } = useLibraryLoader()

// data
const selectedAuthor = ref('')

// computed
const authors = computed(() => getAuthorsList())

// watch
watch(selectedAuthor, async (newValue) => {
  if (!newValue || newValue === store.getters.author) return
  store.dispatch('selectAuthor', newValue)
})

onMounted(async () => {
  selectedAuthor.value = store.getters.author
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
