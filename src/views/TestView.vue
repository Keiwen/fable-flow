<script setup>
// @ is an alias to /src
import AudioTestRaw from '@/components/AudioTestRaw'
import AudioTestLocal from '@/components/AudioTestLocal'
import AudioTestRawChapter from '@/components/AudioTestRawChapter'
import AudioTestUrl from '@/components/AudioTestUrl'
</script>

<template>
  <div>
    <h1>Test page</h1>

    <h2>Raw</h2>
    <audio-test-raw></audio-test-raw>

    <h2>Local</h2>
    <audio-test-local></audio-test-local>

    <h2>Raw chapter</h2>
    <audio-test-raw-chapter></audio-test-raw-chapter>

    <h2>From URL</h2>
    <audio-test-url></audio-test-url>

  </div>
</template>
