<template>
  <main class="bg-white lg:py-5">
    <div class="col-12 lg:hidden">
      <figure class="flex justify-center">
        <img src="../../src/assets/img/food_matsuri.svg" alt="logo do restaurante" width="100%" />
      </figure>
    </div>
    <div class="container">
      <div class="flex items-center">
        <img src="../components/icons/logo_matsuri.svg" alt="logo do restaurante" width="68px" />
        <h2 class="text-[#202326] font-bold ml-4">Matsuri Concept</h2>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 items-center flex">
            <div class="row">
              <h3 class="text-[#393A3C] font-bold">Ceviche de salmão</h3>
              <div class="col-12">
                <span>a partir de R$ 19,90</span>
              </div>
              <div class="col-12">
                <span>salmão temperado com limão, cebola e pimenta</span>
              </div>
              <div class="col-lg-7 col-12 lg:mt-6 mt-4 flex justify-between items-center">
                <span class="font-bold">quantos?</span>

                <button
                  class="bg-[#6D6F73] py-[10px] px-6 text-white rounded-lg w-32"
                  @click="addFoods"
                >
                  adicionar
                </button>
              </div>
              <div class="col-12 col-lg-6 mt-5 flex justify-between items-center">
                <span
                  >total
                  <span class="font-bold">{{
                    quantity === 1 ? priceTotal : valueMultiple
                  }}</span></span
                >
                <span @click="subtractQuantity" v-if="quantity === 1"
                  ><img src="../components/icons/trash.svg" alt=""
                /></span>
                <div
                  v-if="quantity > 1"
                  class="rounded-full bg-[#EEF0F5] h-6 w-6 flex justify-center cursor-pointer"
                  @click="subtractQuantity"
                >
                  <span class="text-[#A8ADB7] font-bold text-base">-</span>
                </div>
                {{ quantity }}

                <div
                  class="rounded-full bg-[#EEF0F5] h-6 w-6 flex justify-center cursor-pointer border-1 border-solid border-green-600"
                  @click="addQuantity"
                >
                  <span class="text-[#A8ADB7] font-bold text-base">+</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 hidden sm:hidden lg:block">
            <figure class="flex justify-celer">
              <img
                src="../../src/assets/img/food_matsuri.svg"
                alt="logo do restaurante"
                width="500px"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </main>
  <SizeComponent @sizeselected="totalSize" />
  <DrinkComponent @price-total-drink="totalPriceDrink" />
  <CutleryComponent @price-total-cultery="totalPriceCultery" />
  <MoreThingComponent @price-total-cookie="totalPriceCookie" @price-total-roll="totalPriceRoll" />
  <ObservationComponent />
</template>
<script lang="ts" setup>
import SizeComponent from '../components/SizeComponent.vue'
import DrinkComponent from '@/components/DrinkComponent.vue'
import CutleryComponent from '@/components/CutleryComponent.vue'
import MoreThingComponent from '@/components/MoreThingComponent.vue'
import ObservationComponent from '@/components/ObservationComponent.vue'
import { computed, ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const total = ref(0)
const totalDrink = ref(0)
const totalCultery = ref(0)
const totalRoll = ref(0)
const totalCookie = ref(0)
const quantity = ref(1)
const addFoods = () => {
  store.addFood()
}
const addQuantity = () => {
  if (sumTotal()) {
    quantity.value++
    sumQuantity()
  }
}
const valueMultiple = ref('')
const valor = ref(0)
const valueMultiuplesubtract = ref(0)
const sumQuantity = () => {
  valor.value =
    total.value + totalDrink.value + totalCultery.value + totalRoll.value + totalCookie.value
  valueMultiuplesubtract.value = quantity.value * valor.value
  valueMultiple.value = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(quantity.value * valor.value)
}

const subtractQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
    valueMultiple.value = new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(valueMultiuplesubtract.value - valor.value)
  }
}

const sumTotal = () => {
  if (
    total.value + totalDrink.value + totalCultery.value + totalRoll.value + totalCookie.value >
    0
  ) {
    return true
  } else {
    return false
  }
}

const totalSize = (value: any) => {
  total.value = parseFloat(value)
}

const totalPriceDrink = (value: any) => {
  totalDrink.value = parseFloat(value)
}
const totalPriceCultery = (value: any) => {
  totalCultery.value = parseFloat(value)
}
const totalPriceCookie = (value: any) => {
  totalCookie.value = parseFloat(value)
}
const totalPriceRoll = (value: any) => {
  totalRoll.value = parseFloat(value)
}

const priceTotal = computed(() =>
  new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
    total.value + totalDrink.value + totalCultery.value + totalRoll.value + totalCookie.value
  )
)
</script>

<style scoped>
/* @media (max-width: 992px) {
  .food {
    display: none;
  }
  .foodMobile {
    display: block;
  }
} */
</style>
