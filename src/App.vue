<template>
  <router-view />
</template>

<script setup>
import { useTheme } from 'vuetify'
// get the os theme
let themeSetting = 'light'
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
if (prefersDarkScheme.matches) {
  themeSetting = 'dark'
}
// set the theme to vue
useTheme().global.name.value = themeSetting
</script>
