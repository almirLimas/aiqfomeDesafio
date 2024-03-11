<template>
  <main class="bg-white mt-1 py-4">
    <div class="container">
      <div class="grid grid-cols-1">
        <h6 class="text-[#202326] font-bold">{{ titleDrink }}</h6>
        <span class="text-sm text-gray-500 font-bold">{{ titleChoose }}</span>
      </div>
      <div class="grid lg:grid-cols-3 sm:grid-cols-1 mt-4 gap-6">
        <div class="flex items-center justify-start lg:justify-around">
          <div
            class="rounded-full bg-[rgb(238,240,245)] h-6 w-6 flex justify-center cursor-pointer mr-6"
            @click="subtractDrink"
          >
            <span class="text-[#A8ADB7] font-bold text-base">-</span>
          </div>
          {{ cocaDrink }}
          <div
            class="rounded-full bg-[#EEF0F5] h-6 w-6 flex justify-center cursor-pointer border-1 border-solid border-green-600 ml-6"
            @click="sumDrink"
          >
            <span class="text-[#A8ADB7] font-bold text-base">+</span>
          </div>
          <span class="ml-4">coca-cola</span>
          <div class="flex justify-end">
            <span class="ml-3 text-[#7B1FA2] font-bold"> +{{ priceValueCoca }}</span>
          </div>
        </div>
        <div class="flex items-center justify-start lg:justify-around">
          <div
            class="rounded-full bg-[#EEF0F5] h-6 w-6 flex justify-center cursor-pointer mr-6"
            @click="subtractJuice"
          >
            <span class="text-[#A8ADB7] font-bold text-base">-</span>
          </div>
          {{ juiceDrink }}
          <div
            class="rounded-full bg-[#EEF0F5] h-6 w-6 flex justify-center cursor-pointer border-1 border-solid border-green-600 ml-6"
            @click="sumJuice"
          >
            <span class="text-[#A8ADB7] font-bold text-base">+</span>
          </div>
          <span class="ml-4">suco prats laranja</span>
          <div class="flex justify-center">
            <span class="ml-3 text-[#7B1FA2] font-bold">+{{ priceValueJuice }}</span>
          </div>
        </div>
        <div class="flex items-center justify-start lg:justify-around">
          <div
            class="rounded-full bg-[#EEF0F5] h-6 w-6 flex justify-center cursor-pointer mr-6"
            @click="subtractWater"
          >
            <span class="text-[#A8ADB7] font-bold text-base">-</span>
          </div>
          {{ waterDrink }}
          <div
            class="rounded-full bg-[#EEF0F5] h-6 w-6 flex justify-center cursor-pointer border-1 border-solid border-green-600 ml-6"
            @click="sumWater"
          >
            <span class="text-[#A8ADB7] font-bold text-base">+</span>
          </div>
          <span class="ml-4">água sem gás</span>
          <div class="flex justify-center">
            <span class="ml-3 text-[#7B1FA2] font-bold"> +{{ priceValueWater }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
const emit = defineEmits(['priceTotalDrink'])
const props = defineProps({
  titleDrink: {
    type: String,
    default: 'vai querer bebida?'
  },
  titleChoose: {
    type: String,
    default: 'escolha quantos quiser'
  }
})

const waterDrink = ref(0)
const cocaDrink = ref(0)
const juiceDrink = ref(0)

const priceValueWater = computed(() =>
  new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
    valueDrink.value.water
  )
)
const priceValueCoca = computed(() =>
  new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
    valueDrink.value.coca
  )
)
const priceValueJuice = computed(() =>
  new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
    valueDrink.value.juice
  )
)

const sumWater = () => {
  if (waterDrink.value === 0) {
    priceTotalDrink(
      valueDrink.value.water,
      cocaDrink.value > 0 ? valueDrink.value.coca : 0,
      juiceDrink.value > 0 ? valueDrink.value.juice : 0
    )
  }
  waterDrink.value++
  if (waterDrink.value > 1) {
    valueDrink.value.water += 5
    priceTotalDrink(
      valueDrink.value.water,
      cocaDrink.value > 0 ? valueDrink.value.coca : 0,
      juiceDrink.value > 0 ? valueDrink.value.juice : 0
    )
  }
}
const sumDrink = () => {
  if (cocaDrink.value === 0) {
    priceTotalDrink(
      valueDrink.value.coca,
      waterDrink.value > 0 ? valueDrink.value.water : 0,
      juiceDrink.value > 0 ? valueDrink.value.juice : 0
    )
  }
  cocaDrink.value++
  if (cocaDrink.value > 1) {
    valueDrink.value.coca += 5
    priceTotalDrink(
      valueDrink.value.coca,
      waterDrink.value > 0 ? valueDrink.value.water : 0,
      juiceDrink.value > 0 ? valueDrink.value.juice : 0
    )
  }
}
const sumJuice = () => {
  if (juiceDrink.value === 0) {
    priceTotalDrink(
      valueDrink.value.juice,
      waterDrink.value > 0 ? valueDrink.value.water : 0,
      cocaDrink.value > 0 ? valueDrink.value.coca : 0
    )
  }
  juiceDrink.value++
  if (juiceDrink.value > 1) {
    valueDrink.value.juice += 5
    priceTotalDrink(valueDrink.value.water, valueDrink.value.coca, valueDrink.value.juice)
  }
}

const subtractWater = () => {
  if (waterDrink.value > 0) {
    waterDrink.value--
  }
  if (waterDrink.value === 0) {
    priceTotalDrink(
      0,
      cocaDrink.value > 0 ? valueDrink.value.coca : 0,
      juiceDrink.value > 0 ? valueDrink.value.juice : 0
    )
  }
  if (waterDrink.value >= 1) {
    valueDrink.value.water -= 5
    priceTotalDrink(
      valueDrink.value.water,
      cocaDrink.value > 0 ? valueDrink.value.coca : 0,
      juiceDrink.value > 0 ? valueDrink.value.juice : 0
    )
  }
}
const subtractDrink = () => {
  if (cocaDrink.value > 0) {
    cocaDrink.value--
  }
  if (cocaDrink.value === 0) {
    priceTotalDrink(
      0,
      waterDrink.value > 0 ? valueDrink.value.water : 0,
      juiceDrink.value > 0 ? valueDrink.value.juice : 0
    )
  }
  if (cocaDrink.value >= 1) {
    valueDrink.value.coca -= 5
    priceTotalDrink(
      valueDrink.value.coca,
      waterDrink.value > 0 ? valueDrink.value.water : 0,
      juiceDrink.value > 0 ? valueDrink.value.juice : 0
    )
  }
}
const subtractJuice = () => {
  if (juiceDrink.value > 0) {
    juiceDrink.value--
  }
  if (juiceDrink.value === 0) {
    priceTotalDrink(
      0,
      cocaDrink.value > 0 ? valueDrink.value.coca : 0,
      waterDrink.value > 0 ? valueDrink.value.water : 0
    )
  }
  if (juiceDrink.value >= 1) {
    valueDrink.value.juice -= 5
    priceTotalDrink(
      valueDrink.value.juice,
      waterDrink.value > 0 ? valueDrink.value.water : 0,
      cocaDrink.value > 0 ? valueDrink.value.coca : 0
    )
  }
}

const valueDrink = ref({
  water: 5,
  coca: 5,
  juice: 5
})

const priceTotalDrink = (water: any, coca: any, juice: any) => {
  emit('priceTotalDrink', water + coca + juice)
}

const titleDrink = ref(props.titleDrink)
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
