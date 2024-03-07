<template>
  <main class="bg-white mt-1 py-4">
    <div class="container">
      <div class="grid grid-cols-1">
        <h6 class="text-[#202326] font-bold">{{ titleSize }}</h6>
        <span class="text-sm text-gray-500 font-bold">{{ titleChoose }}</span>
      </div>
      <div class="grid grid-cols-4">
        <div class="flex items-center">
          <input type="radio" id="medio" name="radio-group" />
          <label for="medio" class="ml-3"><img src="../components/icons/moneyCoin.svg" /> </label>
          <span class="ml-3">médio</span>
        </div>
        <div>
          <input type="radio" id="radio1" name="radio-group" />
        </div>
        <div>
          <input type="radio" id="radio1" name="radio-group" />
        </div>
        <div>
          <input type="radio" id="radio1" name="radio-group" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  titleSize: {
    type: String,
    default: 'qual o tamanho?'
  },
  titleChoose: {
    type: String,
    default: 'escolha 1'
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
