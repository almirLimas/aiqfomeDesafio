<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './views/FooterComponent.vue'
</script>

<template>
  <header>
    <NavbarComponent />

    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  </header>

  <RouterView />
  <footer>
    <FooterComponent />
  </footer>
</template>

<style scoped></style>
