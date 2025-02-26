<script setup>
import SettingAmplify from '@/components/SettingAmplify'
import PackageJson from '@/../package.json'

const appVersion = PackageJson.version

</script>

<template>
  <div>
    <h1>Settings</h1>
    <router-link to="/setup" class="btn btn-secondary">Library setup</router-link>
    <hr/>
    <p class="help">You are using version {{ appVersion }}</p>
    <setting-amplify></setting-amplify>
  </div>
</template>
