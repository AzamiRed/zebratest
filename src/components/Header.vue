<template>
  <header class="header">
    <div class="header__logo">
      <router-link
        to="/"
        class="header__link"
      >
        <img src="/src/assets/logo.svg" alt="logo" />
      </router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 88%;
  margin: 0 auto;
  padding: 47px 0 29px;
}
</style>