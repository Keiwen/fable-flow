<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useLibraryLoader } from '@/composables/libraryLoader'

const store = useStore()
const router = useRouter()
const { getChaptersFromBook } = useLibraryLoader()

// computed
const currentAuthor = computed(() => store.getters.author)
const currentBook = computed(() => store.getters.book)
const currentChapterIndex = computed(() => store.getters.getChapterIndex(currentAuthor.value, currentBook.value))
const chapters = computed(() => getChaptersFromBook(currentAuthor.value, currentBook.value))

const playChapter = async (index) => {
  await store.dispatch('selectChapterIndex', index)
  router.push({ name: 'chapter' })
}
</script>

<template>
  <div>
    <ul>
      <li v-for="(name, index) in chapters" :key="index" :class="index === currentChapterIndex ? 'current' : ''">
        {{ name }}
        <span class="play-icon" @click="playChapter(index)" >
          <svg id="play" xmlns="http://www.w3.org/2000/svg" x="10px" y="10px"
               viewBox="0 0 100 100" xml:space="preserve">
            <path class="play-border play-border-solid" fill="none" :stroke="index === currentChapterIndex ? 'var(--info)' : 'var(--primary)'"
                  d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7 C97.3,23.7,75.7,2.3,49.9,2.5"
            />
            <path class="play-icon" :fill="index === currentChapterIndex ? 'var(--info)' : 'var(--primary)'"
                  d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
            />
          </svg>
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
ul {
  text-align: justify;
  list-style: none;
  padding-inline-start: 0;
  li {
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid var(--main-color);
    display: flex;
    &.current {
      border: 2px solid var(--info);
    }
    .play-icon {
      margin-left: auto;
      border-radius: 50%;
      cursor: pointer;
      display: inline-block;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
