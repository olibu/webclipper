<template>
  <v-container>
    <v-file-input id="fileloader" type="file" class="hiddenfield" accept="image/*" @change="loadImage"/>
    
    <v-row>
      <v-col align="right">
        <canvas id="canvas"></canvas>
      </v-col>
      <v-col align="left">
        <v-btn 
          @click="openImage"
        >
          open
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const props = defineProps(['image'])

const openImage = () => {
  document.getElementById('fileloader').click()
}

const loadImage = (e) => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext("2d");
  const reader = new FileReader;
  reader.onload = function (event) {
      const img = new Image();
      img.src = reader.result;
      img.onload = function () {
          canvas.width = img.width/3;
          canvas.height = img.height/3;

          ctx.drawImage(this, 0, 0, canvas.width, canvas.height);

          // Do whatever image operation you need (resize/crop, visual effects, barcode detection, etc.+
          // invertImage(ctx, canvas);

          // You can even upload the new image to your server
          // postCanvasDataToServer(canvas);
          let image = canvas.toDataURL("image/png")

          // skip the prefix of the base64 image ("data:image/png;base64,")
          image = image.substring(22)
          props.image.data = image
      }
  }
  reader.readAsDataURL(e.target.files[0]);
}
</script>
