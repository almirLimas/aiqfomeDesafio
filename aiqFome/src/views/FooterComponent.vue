<template>
  <main class="bg-gray-300 h-28 p-4">
    <div class="flex items-center justify-center mt-1">
      <h6 class="text-[#7B1FA2] font-bold">feito com &#128156; em maringá-PR</h6>
    </div>
    <div class="flex items-center justify-center mt-1">
      <h6 class="text-[#7B1FA2] font-bold">
        aiqfome.com © 2007-2023 aiqfome LTDA . CNPJ: 09.186.786/0001-58
      </h6>
    </div>
    <div class="flex items-center justify-center mt-1 buttonMobileTicket" v-if="store.addStore">
      <button class="bg-[#7B1FA2] w-full rounded-lg pl-8 pr-8 pt-3 pb-3 text-white">
        Ver ticket
      </button>
    </div>
  </main>
</template>
<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>
<style scoped>
.buttonMobileTicket {
  display: none;
}
@media (max-width: 992px) {
  .buttonMobileTicket {
    display: block;
  }
}
</style>
