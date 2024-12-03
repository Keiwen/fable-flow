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
const browseAuthor = computed(() => store.getters.getBrowseAuthor)

// watch
watch(browseAuthor, async (newValue) => {
  if (newValue === '') return
  selectedBook.value = store.getters.getBrowseBook
  bookHandles.value = await getBookHandles(newValue)
})
watch(selectedBook, async (newValue) => {
  if (newValue === '') return
  const selectedHandler = await getBookHandle(browseAuthor.value, newValue)
  if (selectedHandler) {
    store.dispatch('updateBrowseBook', newValue)
  }
})

onMounted(async () => {
  selectedBook.value = store.getters.getBrowseBook
  bookHandles.value = await getBookHandles(browseAuthor.value)
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
