<template>
  <v-container>
    <v-responsive class="d-flex align-center text-center">
      <h1 class="text-h2 font-weight-bold">WebClip Generator</h1>
      
      <div class="py-2" />
      
      <div class="text-body-2 font-weight-light mb-n1">
        Welcome to the Web Clip Generator for iOS.
      </div>

      <div class="py-2" />
      <v-text-field 
        label="Label"
        v-model="label"
        placeholder="My App"
        hint="The text shown below the icon on your home screen"
      ></v-text-field>
      <v-text-field 
        label="Id"
        v-model="id"
        hint="A unique id of the web clip. Use the same id to replace an existing App"  
      ></v-text-field>
      <v-text-field 
        label="Url"
        v-model="url"
        placeholder="https://myurl.com"
        hint="The URL to be opened"
        @focus="scrollIntoView"
      ></v-text-field>
      <v-btn
        @click="generate"
      >
        Generate
      </v-btn>

      <div class="py-2" />
    </v-responsive>
  </v-container>
</template>

<script setup>
import {ref} from 'vue'
import { generateWebClip } from '../helper/webcliptemplate.js'
import { v4 as uuidv4 } from 'uuid'

const label = ref('')
const id = ref(uuidv4())
const url = ref('')


const generate = () => {
  const clip = {
    payloadId: id.value,
    payloadUUID: id.value,
    label: label.value,
    url: url.value
  }
  const webclip = generateWebClip(clip)
  const link = document.createElement('a')
  link.download = label.value
  link.href = window.URL.createObjectURL(webclip)
  link.click()
}

const scrollIntoView = (event) => {
  event.target.scrollIntoView()
}
</script>
