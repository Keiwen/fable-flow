<template>
  <div>
    <book-info></book-info>
    <audio-player></audio-player>
    <chapter-info></chapter-info>
  </div>
</template>

<script>
// @ is an alias to /src
import ChapterInfo from '@/components/ChapterInfo'
import AudioPlayer from '@/components/AudioPlayer'
import BookInfo from '@/components/BookInfo'

export default {
  name: 'ChapterPlayView',
  components: {
    BookInfo,
    AudioPlayer,
    ChapterInfo
  }
}
</script>
