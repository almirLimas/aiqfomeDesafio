<template>
  <main class="bg-white mt-1 py-4">
    <div class="container">
      <div class="grid grid-cols-1">
        <h6 class="text-[#202326] font-bold">{{ titleSize }}</h6>
        <span class="text-sm text-gray-500 font-bold">{{ titleChoose }}</span>
      </div>
      <div class="grid lg:grid-cols-2 sm:grid-cols-1 mt-4">
        <div class="flex items-center">
          <input
            type="radio"
            id="average"
            :value="sizeFood.average"
            name="radio-group"
            @input="sizeselected"
          />
          <label for="average" class="ml-3"><img src="../components/icons/moneyCoin.svg" /> </label>
          <span class="ml-3">médio</span>
          <span class="ml-9"
            >de R$ 22,90 por <span class="text-[#02A117] font-bold">R$ 19,90</span></span
          >
        </div>
        <div class="flex items-center">
          <input
            type="radio"
            id="big"
            :value="sizeFood.big"
            name="radio-group"
            @input="sizeselected"
          />
          <span class="ml-3">grande</span>
          <span class="ml-32 text-[#7B1FA2] font-bold">R$ 28,90</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['sizeselected'])
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

const sizeFood = ref({
  average: 19.9,
  big: 28.9
})

const sizeselected = (e: any) => {
  emit('sizeselected', e.target.value)
}

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
