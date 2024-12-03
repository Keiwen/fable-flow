<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useFolderBrowser } from '@/composables/folderBrowser'

const store = useStore()
const { books, listBooks } = useFolderBrowser()

// data
const selectedBook = ref('')

// computed
const currentAuthorHandle = computed(() => store.getters.getAuthorHandle)

// watch
watch(currentAuthorHandle, async (newHandler) => {
  if (newHandler) {
    selectedBook.value = store.getters.getBookName
    await listBooks(newHandler)
  }
})
watch(selectedBook, (newValue) => {
  const selectedHandler = books.value.find(book => book.name === newValue)
  if (selectedHandler) {
    store.dispatch('updateBookHandle', selectedHandler.handle)
  }
})

onMounted(async () => {
  const authorHandle = store.getters.getAuthorHandle
  selectedBook.value = store.getters.getBookName
  await listBooks(authorHandle)
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
        <option v-for="bookHandle in books" :key="bookHandle.name" :value="bookHandle.name">
          {{ bookHandle.name }}
        </option>
      </select>
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>
