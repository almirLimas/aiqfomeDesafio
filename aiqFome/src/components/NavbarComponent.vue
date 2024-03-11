<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg nav">
      <div class="container">
        <a class="navbar-brand hidden lg:block" href=""><img src="./icons/logo_endereco.svg" /></a>
        <a class="navbar-brand block lg:hidden" href=""
          ><img src="../assets/img/logo _endereço.svg"
        /></a>
        <div class="w-2/5 flex searchInput">
          <input type="text" class="rounded-lg py-2 w-full pl-12" />
          <i class="fa-solid fa-magnifying-glass icon_input"></i>
        </div>
        <button
          v-if="store.addStore"
          class="bg-white text-[#7B1FA2] font-bold w-40 rounded-lg px-4 py-2 flex items-center buttonTicket"
        >
          <img class="mr-3" src="../components/icons/ticket.svg" />Ver ticket
        </button>
        <button class="bg-[#00A296] text-white w-32 rounded-lg px-4 py-2 buttonEnter">
          <i class="fa-regular fa-user mr-2"></i>Entrar
        </button>
      </div>
    </nav>
  </div>
</template>
<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
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

@media (max-width: 992px) {
  .buttonTicket {
    display: none;
  }
  .buttonEnter {
    display: none;
  }
  .searchInput {
    display: none;
  }
}
</style>
