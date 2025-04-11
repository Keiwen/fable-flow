<script setup>
import { useFlashMessages } from '@/composables/flashMessages'
import { computed } from 'vue'
import NavBar from '@/components/NavBar'
import { useStore } from 'vuex'

const { flashMessages, clearMessage } = useFlashMessages()
const store = useStore()
const messages = computed(() => flashMessages.value)
const themeName = computed(() => store.getters.theme)

const computeAlertClass = (type) => {
  switch (type) {
    case 'error': return 'alert-danger'
    default:
      return 'alert-' + type
  }
}

</script>

<template>
  <div :class="'theme-'+themeName">
    <nav-bar></nav-bar>
    <div class="message-container">
      <div v-for="(message, msgIndex) in messages" :key="msgIndex" class="alert" :class="computeAlertClass(message.type)" @click="clearMessage(msgIndex)">
        {{ message.message }}
      </div>
    </div>
    <router-view class="content"/>
  </div>
</template>

<style lang="scss">
#app {
  & > div.theme-dark {
    --main-color: #C5FDFE;
    --main-bg: #0F1721;
    --main-bg-alpha: #0F17214D; // rgba(main-bg, 0.3)
    --light-bg: #4A5A64;
    --border-radius: 50px;
  }
  & > div.theme-light {
    --main-color: #0F1721;
    --main-bg: #EEE5E5;
    --main-bg-alpha: #DDCECD4D;
    --light-bg: #EEE5E5;
    --border-radius: 50px;
    --light: #000000;
    --dark: #FFFFFF;
  }
}

</style>
