<template>
  <div>
    <audio-player></audio-player>
    <chapter-info></chapter-info>
  </div>
</template>

<script>
// @ is an alias to /src
import ChapterInfo from '@/components/ChapterInfo'
import AudioPlayer from '@/components/AudioPlayer'

export default {
  name: 'ChapterPlayView',
  components: {
    AudioPlayer,
    ChapterInfo
  }
}
</script>
