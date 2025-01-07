<script setup>
// @ is an alias to /src
import ChapterInfo from '@/components/ChapterInfo'
import AudioPlayer from '@/components/AudioPlayer'
import BookInfo from '@/components/BookInfo'
</script>

<template>
  <div>
    <h1>Chapter play</h1>
    <book-info></book-info>
    <audio-player></audio-player>
    <chapter-info></chapter-info>
  </div>
</template>
