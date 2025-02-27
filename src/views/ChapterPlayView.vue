<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
// @ is an alias to /src
import ChapterInfo from '@/components/ChapterInfo'
import AudioPlayer from '@/components/AudioPlayer'
import BookInfo from '@/components/BookInfo'

const store = useStore()

const displayChapterTitle = computed(() => store.getters.displayChapterTitle)
</script>

<template>
  <div>
    <h1>Chapter play</h1>
    <book-info></book-info>
    <audio-player></audio-player>
    <chapter-info v-if=" displayChapterTitle"></chapter-info>
  </div>
</template>
