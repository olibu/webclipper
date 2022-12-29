<template>
  <v-app>
    <v-main>
      <router-view />
      <SnackbarCmp />
  </v-main>
  </v-app>
</template>

<script setup>
import SnackbarCmp from '@/components/SnackbarCmp.vue'
</script>
