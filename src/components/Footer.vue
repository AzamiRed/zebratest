<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__logo">
        <img src="/src/assets/logo.svg" alt="logo" />
      </div>
      <div class="footer__text">© alpha, 2023</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: rgba(240, 246, 254, 1);

  &__content {
    width: 88%;
    margin: 0 auto;
    padding: 57px 0 60px;
  }

  &__logo {
    width: 114px;
  }

  &__logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__text {
    font: 400 16px/22.4px 'Nunito Sans', sans-serif;
    color: rgba(129, 137, 157, 1);
    margin-top: 13px;
  }
}
</style>