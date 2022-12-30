<script setup lang="ts">
  import { useRegisterSW } from 'virtual:pwa-register/vue'
  
  const {
    offlineReady,
    needRefresh,
    updateServiceWorker,
  } = useRegisterSW()
  
  const close = async () => {
    offlineReady.value = false
    needRefresh.value = false
  }
  </script>
  
  <template>
    <div
      v-if="offlineReady || needRefresh"
      class="pwa-toast"
      role="alert"
    >
      <div class="message">
        <span v-if="offlineReady">
          App ready to work offline
        </span>
        <span v-else>
          New version available!
        </span>
      </div>
      <button v-if="needRefresh" @click="updateServiceWorker()">
        Update
      </button>
      <button @click="close">
        Close
      </button>
    </div>
  </template>
  
  <style>
  .pwa-toast {
    position: fixed;
    right: 0;
    bottom: 0;
    margin-bottom: 66px;
    margin-right: 10px;
    padding: 12px;
    border: 3px solid #8884;
    border-radius: 10px;
    z-index: 1;
    text-align: left;
    background-color: black;
  }
  .pwa-toast .message {
    margin-bottom: 8px;
  }
  .pwa-toast button {
    border: 1px solid #8885;
    outline: none;
    margin-right: 5px;
    border-radius: 2px;
    padding: 3px 10px;
  }
  </style>
  