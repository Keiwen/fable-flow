<script setup>
import { useFlashMessages } from '@/composables/flashMessages'
import { computed } from 'vue'
import NavBar from '@/components/NavBar'

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
  <nav-bar></nav-bar>
  <div class="message-container">
    <div v-for="(message, msgIndex) in messages" :key="msgIndex" class="alert" :class="computeAlertClass(message.type)" @click="clearMessage(msgIndex)">
      {{ message.message }}
    </div>
  </div>
  <router-view class="content"/>
</template>

<style lang="scss">
</style>
