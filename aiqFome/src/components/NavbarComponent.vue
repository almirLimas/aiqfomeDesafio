<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg nav">
      <div class="container">
        <a class="navbar-brand" href=""><img src="./icons/logo_endereco.svg" /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="w-2/5 flex">
          <input type="text" class="rounded-lg py-2 w-full" />
          <i class="fa-solid fa-magnifying-glass icon_input"></i>
        </div>
        <button class="bg-[#00A296] text-white w-32 rounded-lg px-4 py-2">
          <i class="fa-regular fa-user mr-2"></i>Entrar
        </button>
      </div>
    </nav>
  </div>
</template>

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
