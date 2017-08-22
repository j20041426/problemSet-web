<template>
  <div>
    <mu-appbar title="设置">
      <mu-icon-button icon="chevron_left" slot="left" to="/" />
    </mu-appbar>
    <div class="content-wrapper">
      <mu-select-field v-model="theme" :labelFocusClass="['label-foucs']" label="更改主题" @change="changeTheme">
        <mu-menu-item v-for="(theme,index) in themes" :key="theme.name" :value="theme.name" :title="theme.name" />
      </mu-select-field>
    </div>
  </div>
</template>

<script>
import def from 'raw-loader!../../static/theme/theme-default.theme'
import light from 'raw-loader!../../static/theme/theme-light.theme'
import dark from 'raw-loader!../../static/theme/theme-dark.theme'
import carbon from 'raw-loader!../../static/theme/theme-carbon.theme'
import teal from 'raw-loader!../../static/theme/theme-teal.theme'

export default {
  data() {
    return {
      themes: [
        { name: 'default', value: def },
        { name: 'light', value: light },
        { name: 'dark', value: dark },
        { name: 'carbon', value: carbon },
        { name: 'teal', value: teal }
      ],
      theme: ''
    }
  },
  methods: {
    changeTheme(theme) {
      this.theme = theme
      localStorage.setItem('theme', theme);
      const styleEl = this.getThemeStyle()
      for (let i in this.themes) {
        if (this.themes[i].name === theme) {
          styleEl.innerHTML = this.themes[i].value || '';
        }
      }

    },
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
    var theme = localStorage.getItem('theme');
    for (let i in this.themes) {
      if (this.themes[i].name === theme) {
        this.theme = theme;
      }
    }
    this.theme = this.theme || 'DEFAULT';
  }
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  padding: 0 20px;
}
</style>
