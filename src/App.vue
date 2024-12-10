<script setup>
import { useFlashMessages } from '@/composables/flashMessages'
import { computed } from 'vue'

const { flashMessages, clearMessage } = useFlashMessages()
const messages = computed(() => flashMessages.value)

const computeAlertClass = (type) => {
  switch (type) {
    case 'error': return 'alert-danger'
    default:
      return 'alert-' + type
  }
}

</script>

<template>
  <nav>
    <router-link to="/setup">Setup</router-link> |
    <router-link to="/book">Book</router-link> |
    <router-link to="/">Chapter</router-link> |
    <router-link to="/settings">Settings</router-link>
  </nav>
  <div class="message-container">
    <div v-for="(message, msgIndex) in messages" :key="msgIndex" class="alert" :class="computeAlertClass(message.type)" @click="clearMessage(msgIndex)">
      {{ message.message }}
    </div>
  </div>
  <router-view class="content"/>
</template>

<style lang="scss">
</style>
