<script setup>
import { ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { useFolderBrowser } from '@/composables/folderBrowser'

const store = useStore()
const { getAuthorHandles, getAuthorHandle } = useFolderBrowser()

// data
const selectedAuthor = ref('')
const authorsHandles = ref([])

// watch
watch(selectedAuthor, async (newValue) => {
  const selectedHandler = await getAuthorHandle(newValue)
  if (selectedHandler) {
    store.dispatch('updateBrowseAuthor', newValue)
  }
})

onMounted(async () => {
  selectedAuthor.value = store.getters.getBrowseAuthor
  authorsHandles.value = await getAuthorHandles()
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
        <option v-for="authorHandle in authorsHandles" :key="authorHandle.name" :value="authorHandle.name">
          {{ authorHandle.name }}
        </option>
      </select>
    </p>
  </div>
</template>

<style scoped lang="scss">

</style>
