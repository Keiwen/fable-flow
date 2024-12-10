<script setup>
import { useFlashMessages } from '@/composables/flashMessages'
import { computed } from 'vue'

const { flashMessages } = useFlashMessages()
const messages = computed(() => flashMessages.value)

</script>

<template>
  <nav>
    <router-link to="/setup">Setup</router-link> |
    <router-link to="/book">Book</router-link> |
    <router-link to="/">Chapter</router-link> |
    <router-link to="/settings">Settings</router-link>
  </nav>
  <router-view/>
  <div>
    <ul>
      <li v-for="(message, msgIndex) in messages" :key="msgIndex">{{ message.message }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
</style>
