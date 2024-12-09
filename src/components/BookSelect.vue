<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useLibraryLoader } from '@/composables/libraryLoader'

const store = useStore()
const { getBooksFromAuthor } = useLibraryLoader()

// data
const selectedBook = ref('')

// computed
const currentAuthor = computed(() => store.getters.author)
const books = computed(() => getBooksFromAuthor(currentAuthor.value))

// watch
watch(currentAuthor, async (newValue) => {
  if (!newValue) return
  selectedBook.value = store.getters.book
})
watch(selectedBook, async (newValue) => {
  if (!newValue || newValue === store.getters.book) return
  store.dispatch('selectBook', newValue)
})

onMounted(async () => {
  selectedBook.value = store.getters.book
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
