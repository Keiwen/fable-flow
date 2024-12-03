<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useFolderBrowser } from '@/composables/folderBrowser'

const store = useStore()
const { getBookHandles, getBookHandle } = useFolderBrowser()

// data
const selectedBook = ref('')
const bookHandles = ref([])

// computed
const currentAuthor = computed(() => store.getters.getCurrentAuthor)

// watch
watch(currentAuthor, async (newValue) => {
  if (newValue === '') return
  selectedBook.value = store.getters.getCurrentBook
  bookHandles.value = await getBookHandles(newValue)
})
watch(selectedBook, async (newValue) => {
  if (newValue === '') return
  const selectedHandler = await getBookHandle(currentAuthor.value, newValue)
  if (selectedHandler) {
    store.dispatch('updateCurrentBook', newValue)
  }
})

onMounted(async () => {
  selectedBook.value = store.getters.getCurrentBook
  bookHandles.value = await getBookHandles(currentAuthor.value)
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
        <option v-for="bookHandle in bookHandles" :key="bookHandle.name" :value="bookHandle.name">
          {{ bookHandle.name }}
        </option>
      </select>
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>
