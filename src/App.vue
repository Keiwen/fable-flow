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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
