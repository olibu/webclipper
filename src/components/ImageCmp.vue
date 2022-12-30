<template>
  <v-container>
    <v-file-input 
      id="fileloader" 
      type="file" 
      class="hiddenfield" 
      accept="image/*" 
      @change="loadImage"
    />
    
    <v-row>
      <v-col align="right" 
        @click="triggerPaste"
      >
        <canvas id="canvas" :style="{ backgroundImage: `url(${imagePath})` }"></canvas>
      </v-col>
      <v-col align="left">
        <v-btn 
          @click="openImage"
        >
          open
        </v-btn>
        <br />
        <v-btn 
          class="mt-1"
          @click="loadImageFromClip"
        >
          clipboard
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useAppStore } from '@/store/app.js'
import imagePath from '@/assets/canvas_bg.png'

const store = useAppStore()

const props = defineProps(['image'])

const openImage = () => {
  document.getElementById('fileloader').click()
}

const loadImage = (e) => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext("2d")
  const reader = new FileReader
  reader.onload = function () {
    const img = new Image()
    img.src = reader.result
    img.onload = function () {
      ctx.drawImage(this, 0, 0, canvas.width, canvas.height)
      let image = canvas.toDataURL("image/png")

      // skip the prefix of the base64 image ("data:image/png;base64,")
      image = image.substring(22)
      props.image.data = image
    }
  }
  reader.readAsDataURL(e.target.files[0]);
}

const loadImageFromClip = async () => {
  try {
    let pasted = false
    if (!navigator.clipboard) {
      triggerPaste() // try to paste data on iOS
      return
    }
    const items = await navigator.clipboard.read()
    for (const item of items) {
      for (const type of item.types) {
        if (type === 'image/png') {
          const blob = await item.getType(type)
          /* draw image data from blob */
          const canvas = document.getElementById('canvas')
          const ctx = canvas.getContext("2d")
          const reader = new FileReader
          reader.onload = function () {
            const img = new Image()
            img.src = reader.result
            img.onload = function () {
              ctx.drawImage(this, 0, 0, canvas.width, canvas.height)
              let image = canvas.toDataURL("image/png")

              // skip the prefix of the base64 image ("data:image/png;base64,")
              image = image.substring(22)
              props.image.data = image
            }
          }
          reader.readAsDataURL(blob)
          pasted = true
        }
      }
    }
    if (!pasted) {
      store.showSnackbar('No image found in clipboard!')
    }
  } catch (err) {
      console.error(err)
      store.showSnackbar('Cannot copy image from clipboard!')
  }
}

const triggerPaste = async (e) => {
  document.execCommand("paste")
}

document.onpaste = function(event){
  let pasted = false
  var items = (event.clipboardData || event.originalEvent.clipboardData).items
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext("2d")
  for (let index in items) {
    var item = items[index]
    if (item.kind === 'file') {
      var blob = item.getAsFile()
      var reader = new FileReader()
      reader.onload = function(event){
        const img = new Image()
        img.src = event.target.result
        img.onload = function () {
          ctx.drawImage(this, 0, 0, canvas.width, canvas.height)
          let image = canvas.toDataURL("image/png")

          // skip the prefix of the base64 image ("data:image/png;base64,")
          image = image.substring(22)
          props.image.data = image
        }
      }
      reader.readAsDataURL(blob)
      pasted = true
    }
    else if (item.kind === 'string') {
      pasted = true // ignore text paste in text fields
    }
  }
  if (!pasted) {
    store.showSnackbar('No image found in clipboard!')
  }
}
</script>

<style>
.hiddenfield {
    visibility: hidden;
    position: absolute;
    top: 0px;
}

#canvas {
    border: 2px solid white;
    width: 100px;
    height: 100px;
    border-radius: 25px;
    background-repeat: repeat;
}
</style>
