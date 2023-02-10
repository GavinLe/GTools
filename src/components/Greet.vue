<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";
import { handleIsTauri } from "../utils/index";
import { ElMessage } from 'element-plus';

const greetMsg = ref("");
const name = ref("");

async function greet() {
  if (handleIsTauri()) {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    greetMsg.value = await invoke("greet", { name: name.value });
  } else {
    ElMessage({
      message: '当前环境不在tauri app 环境中！',
      type: 'warning',
    })
  }
  
}
</script>

<template>
  <div class="card">
    <input id="greet-input" v-model="name" placeholder="Enter a name..." />
    <button type="button" @click="greet()">Greet</button>
  </div>

  <p>{{ greetMsg }}</p>
</template>
