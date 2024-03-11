import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const addStore = ref(false)

  function addFood() {
    addStore.value = true
  }

  return { addFood, addStore }
})
