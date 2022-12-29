<template>
<div class="text-center">
    <v-snackbar
      v-model="store.snackbar.show"
      color="red"
      :timeout="2000"
    >
    <v-row>
      <v-col col="8" align="center">
        {{ store.snackbar.text }}
      </v-col>
    </v-row>
    </v-snackbar>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store/app.js'

const store = useAppStore()
</script>