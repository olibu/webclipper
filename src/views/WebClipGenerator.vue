<template>
  <v-container>
    <v-responsive class="d-flex align-center text-center">
      <div class="d-flex justify-center">
        <p class="text-h3 font-weight-bold">Web&nbsp;Clipper</p>
        <p class="text-caption" align="right">V1.1.0</p>
      </div>

      <div class="py-2" />
      
      <div class="text-body-2 font-weight-light mb-n1">
        Welcome to the Web Clipper a generator of Web Clips for iOS.
      </div>

      <div class="py-2" />
      <v-text-field 
        label="Label"
        v-model="label"
        density="compact"
        placeholder="My App"
        hint="The text shown below the icon on your home screen"
      ></v-text-field>
      <v-text-field 
        label="Id"
        v-model="id"
        density="compact"
        hint="A unique id of the web clip. Use the same id to replace an existing App"  
      ></v-text-field>
      <v-text-field 
        label="Url"
        v-model="url"
        density="compact"
        placeholder="https://myurl.com or messages://"
        hint="The URL to be opened. You can use locally register web hooks, too. Do not use spaces."
        @focus="scrollIntoView"
      ></v-text-field>
      <v-checkbox 
        label="Precomposed (do not adjust the icon)"
        v-model="precomposed"
        density="compact"
        hide-details="true"
      ></v-checkbox>
      <v-checkbox 
        label="Ignore manifest (force no Safari UI)"
        v-model="ignoreManifestScope"
        density="compact"
      ></v-checkbox>
      <ImageCmp :image="image"/>
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
import { generateWebClip } from '@/helper/webcliptemplate.js'
import { v4 as uuidv4 } from 'uuid'
import ImageCmp from '@/components/ImageCmp.vue'
import { useAppStore } from '@/store/app.js'

const store = useAppStore()

const label = ref('')
const id = ref(uuidv4())
const url = ref('')
const image = ref({})
const precomposed = ref(true)
const ignoreManifestScope = ref(false)


const generate = () => {
  if (!label.value) {
    store.showSnackbar('Missing label!')
    return
  }
  if (!id.value) {
    store.showSnackbar('Missing id!')
    return
  }
  if (!url.value  || !url.value === '') {
    store.showSnackbar('Missing or invalid URL!')
    return
  }
  if (!image.value  || !image.value.data) {
    store.showSnackbar('Missing image!')
    return
  }
  const clip = {
    payloadId: id.value,
    payloadUUID: id.value,
    label: label.value,
    url: url.value,
    image: image.value.data,
    precomposed: precomposed.value,
    ignoreManifestScope: ignoreManifestScope.value,
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
