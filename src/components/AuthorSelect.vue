<script setup>
import { ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { useFolderBrowser } from '@/composables/folderBrowser'

const store = useStore()
const { authors, listAuthors } = useFolderBrowser()

// data
const selectedAuthor = ref('')

// watch
watch(selectedAuthor, (newValue) => {
  const selectedHandler = authors.value.find(author => author.name === newValue)
  if (selectedHandler) {
    store.dispatch('updateAuthorHandle', selectedHandler.handle)
  }
})

onMounted(async () => {
  const libraryHandle = store.getters.getLibraryHandle
  selectedAuthor.value = store.getters.getAuthorName
  await listAuthors(libraryHandle)
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
        <option v-for="authorHandle in authors" :key="authorHandle.name" :value="authorHandle.name">
          {{ authorHandle.name }}
        </option>
      </select>
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>
