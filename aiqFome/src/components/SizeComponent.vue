<template>
  <main class="bg-white mt-1 py-4">
    <div class="container">
      <h6 class="text-[#202326] font-bold">{{ titleSize }}</h6>
      <span class="text-sm text-gray-500 font-bold">escolha 1</span>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  titleSize: {
    type: String,
    default: 'qual o tamanho?'
  }
})

const titleSize = ref(props.titleSize)
</script>

<style scoped>
.nav {
  background-color: #7b1fa2;
}

.icon_input {
  position: relative;
  top: 13px;
  right: 30rem;
  color: #a8adb7;
  font-size: 1.1rem;
}
</style>
