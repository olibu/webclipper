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
import SnackbarCmp from '@/components/SnackbarCmp.vue'
import ReloadPrompt from '@/components/ReloadPrompt.vue';
</script>
