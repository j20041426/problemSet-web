<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import def from 'raw-loader!../static/theme/theme-default.theme'
import light from 'raw-loader!../static/theme/theme-light.theme'
import dark from 'raw-loader!../static/theme/theme-dark.theme'
import carbon from 'raw-loader!../static/theme/theme-carbon.theme'
import teal from 'raw-loader!../static/theme/theme-teal.theme'

export default {
  name: 'app',
  data() {
    return {
      themes: { 'default': def, light, dark, carbon, teal }
    }
  },
  methods: {
    getThemeStyle() {
      const themeId = 'muse-theme'
      let styleEl = document.getElementById(themeId)
      if (styleEl) return styleEl
      styleEl = document.createElement('style')
      styleEl.id = themeId
      document.body.appendChild(styleEl)
      return styleEl
    }
  },
  mounted() {
    const theme = localStorage.getItem('theme') || 'default'
    const styleEl = this.getThemeStyle()
    styleEl.innerHTML = this.themes[theme] || '';
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
