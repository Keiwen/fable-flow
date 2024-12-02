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

<script>
import { ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { useFolderBrowser } from '@/composables/useFolderBrowser'

export default {
  name: 'AuthorSelect',
  setup () {
    const store = useStore()
    const { authors, listAuthors } = useFolderBrowser()

    // data
    const selectedAuthor = ref('')

    // watch
    watch(selectedAuthor, (newValue) => {
      const selectedHandler = authors.value.find(author => author.name === newValue)
      console.log('selection is', selectedHandler)
    })

    onMounted(async () => {
      const libraryHandle = store.getters.getLibraryHandle
      await listAuthors(libraryHandle)
    })

    return {
      authors,
      selectedAuthor
    }
  }
}
</script>

<style scoped lang="scss">

</style>
