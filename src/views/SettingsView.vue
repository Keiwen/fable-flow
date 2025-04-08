<script setup>
import PackageJson from '@/../package.json'
import SettingAmplify from '@/components/SettingAmplify'
import SettingAutoplayNextChapter from '@/components/SettingAutoplayNextChapter'
import SettingChapterTitle from '@/components/SettingChapterTitle'
import SettingAutoRewindOnPause from '@/components/SettingAutoRewindOnPause'

const appVersion = PackageJson.version

</script>

<template>
  <div>
    <h1>Settings</h1>
    <router-link to="/setup" class="btn btn-secondary">Library setup</router-link>
    <hr/>
    <p class="help">You are using version {{ appVersion }}</p>
    <div class="settings-container">
      <setting-amplify></setting-amplify>
      <setting-autoplay-next-chapter></setting-autoplay-next-chapter>
      <setting-chapter-title></setting-chapter-title>
      <setting-auto-rewind-on-pause></setting-auto-rewind-on-pause>
    </div>
  </div>
</template>

<style>
  .settings-container > div {
    margin-bottom: 15px;
  }
</style>
