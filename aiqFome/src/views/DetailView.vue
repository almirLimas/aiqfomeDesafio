<template>
  <main class="bg-white">
    <div class="container">
      <div class="flex items-center">
        <img src="../components/icons/logo_matsuri.svg" alt="logo do restaurante" width="68px" />
        <h2 class="text-[#202326] font-bold ml-4">Matsuri Concept</h2>
      </div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-6">
            <div class="row">
              <h3 class="text-[#393A3C] font-bold">Ceviche de salmão</h3>
              <div class="col-12">
                <span>a partir de R$ 19,90</span>
              </div>
              <div class="col-12">
                <span>salmão temperado com limão, cebola e pimenta</span>
              </div>
              <div class="col-6 mt-5">
                <span>quantos?</span>
              </div>
              <div class="col-6 mt-5">
                <button class="bg-[#6D6F73] py-[10px] px-6 text-white rounded-lg w-32">
                  adicionar
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <figure class="flex justify-center">
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
  <SizeComponent />
</template>
<script lang="ts" setup>
import SizeComponent from '../components/SizeComponent.vue'
</script>

<style></style>
