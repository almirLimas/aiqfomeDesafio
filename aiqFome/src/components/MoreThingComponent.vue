<template>
  <main class="bg-white mt-1 py-4">
    <div class="container">
      <div class="grid grid-cols-1">
        <h6 class="text-[#202326] font-bold">{{ titleThings }}</h6>
        <span class="text-sm text-gray-500 font-bold">{{ titleChoose }}</span>
      </div>
      <div class="grid lg:grid-cols-4 grid-cols-1 mt-4">
        <div class="flex items-center">
          <input type="checkbox" id="cookie" name="checkbox" :value="2" @input="priceTotalCookie" />
          <span class="ml-3">biscoito da sorte</span>
          <div class="flex justify-center">
            <span class="ml-3 text-[#7B1FA2] font-bold"> +R$ 2,00</span>
          </div>
        </div>

        <div class="flex items-center">
          <input type="checkbox" id="roll" name="checkbox" :value="8" @input="priceTotalRoll" />
          <span class="ml-3">rolinho primavera</span>
          <div class="flex justify-center">
            <span class="ml-3 text-[#7B1FA2] font-bold"> +R$ 8,00</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['priceTotalCookie', 'priceTotalRoll'])

const props = defineProps({
  titleThings: {
    type: String,
    default: 'Mais alguma coisa?'
  },
  titleChoose: {
    type: String,
    default: 'escolha até 2'
  }
})

const priceTotalCookie = (e: any) => {
  if (e.target.checked) {
    emit('priceTotalCookie', e.target.value)
  } else {
    emit('priceTotalCookie', 0)
  }
}

const priceTotalRoll = (e: any) => {
  if (e.target.checked) {
    emit('priceTotalRoll', e.target.value)
  } else {
    emit('priceTotalRoll', 0)
  }
}

const titleThings = ref(props.titleThings)
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
