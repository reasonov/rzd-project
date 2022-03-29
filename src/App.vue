<template>
  <header>
    <div class="header__container">
      <router-link to="/" class="header__logo">
        <img src="./assets/img/logo.png" alt="RZD logo">
      </router-link>

      <nav class="main-nav">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link to="/ticket" class="nav__link">Купить билет</router-link>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">История поездок</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">Чат</a>
          </li>
          <li class="nav__item">
            <router-link to="/rate" class="nav__link">Личный кабинет</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <main>

    <router-view />

  </main>

  <footer>
    <div class="footer__container">
      <a href="#" class="footer__link">О сайте</a>
      <p class="footer__contacts">
        Контакты:
        nk@ro.ru
      </p>
      <img class="train-image" src="./assets/img/train.png" alt="train image">
    </div>
  </footer>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style src="./assets/css/main.css"></style>
