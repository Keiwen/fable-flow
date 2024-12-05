<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// data
const selectedBook = ref('')

// computed
const currentAuthor = computed(() => store.getters.currentAuthor)
const books = computed(() => store.getters.getBooksFromAuthor(currentAuthor.value))

// watch
watch(currentAuthor, async (newValue) => {
  if (!newValue) return
  selectedBook.value = store.getters.currentBook
})
watch(selectedBook, async (newValue) => {
  if (!newValue || newValue === store.getters.currentBook) return
  store.dispatch('updateCurrentBook', newValue)
})

onMounted(async () => {
  selectedBook.value = store.getters.currentBook
})
</script>

<template>
  <div>
    <p>
      Current book is set to {{ selectedBook }}
    </p>
    <p>
      Select book:
      <select v-model="selectedBook">
        <option v-for="book in books" :key="book" :value="book">
          {{ book }}
        </option>
      </select>
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>
