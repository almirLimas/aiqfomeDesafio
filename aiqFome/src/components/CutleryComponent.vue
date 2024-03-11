<template>
  <main class="bg-white mt-1 py-4">
    <div class="container">
      <div class="grid grid-cols-1">
        <h6 class="text-[#202326] font-bold">{{ titleCultery }}</h6>
        <span class="text-sm text-gray-500 font-bold">{{ titleChoose }}</span>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-4 mt-4">
        <div class="flex items-center">
          <input
            type="radio"
            id="hashi"
            name="radio-group"
            :value="cultery.hashi"
            @input="priceTotalCultery"
          />
          <span class="ml-3">hashi</span>
        </div>
        <div class="flex items-center">
          <input
            type="radio"
            id="fork"
            name="radio-group"
            :value="cultery.fork"
            @input="priceTotalCultery"
          />
          <span class="ml-3">garfo e faca descartável</span>
          <div class="flex items-center">
            <span class="ml-3 text-[#7B1FA2] font-bold">+R$ 1,00</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['priceTotalCultery'])
const props = defineProps({
  titleCultery: {
    type: String,
    default: 'Precisa de talher?'
  },
  titleChoose: {
    type: String,
    default: 'escolha até 1'
  }
})

const cultery = ref({
  hashi: 1.0,
  fork: 1.0
})
const priceTotalCultery = (price: any) => {
  emit('priceTotalCultery', price.target.value)
}

const titleCultery = ref(props.titleCultery)
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
