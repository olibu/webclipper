<template>
  <v-app>
    <v-main>
      <router-view />
      <SnackbarCmp />
      <ReloadPrompt />
    </v-main>
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'
import SnackbarCmp from '@/components/SnackbarCmp.vue'
import ReloadPrompt from '@/components/ReloadPrompt.vue';

// get the os theme
let themeSetting = 'light'
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
if (prefersDarkScheme.matches) {
  themeSetting = 'dark'
}
// set the theme to vue
useTheme().global.name.value = themeSetting
</script>
