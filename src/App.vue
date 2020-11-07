<template>
  <div id="app">
    <div>
      <button
        v-for="entry in languages"
        :key="entry.title"
        @click="changeLocale(entry.language)"
      >
        {{ entry.title }}
      </button>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/farmer-list">Farmer</router-link>|
      <router-link to="/application-list">Application</router-link>|
      <router-link to="/farmer-report">Farmer Report</router-link>|
      <router-link to="/application-report">Application Report</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import i18n from './locale'

export default {
  data () {
    return {
      languages: [
        { flag: 'us', language: 'en', title: 'English' },
        { flag: 'bn', language: 'bn', title: 'Bengali' }
      ]
    }
  },
  methods: {
    changeLocale (locale) {
      i18n.locale = locale
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
