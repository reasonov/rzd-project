<template>
  <section class="rate-page">
    <div class="rate__container">
      <div class="rate__background">
        <h2 class="rate__title">Оцените поездку</h2>

        <div class="rate__main">
          <img src="../assets/img/chel1.png" class="rate__photo">

          <div class="rate__info">
            <h3 class="info__title">Ваш попутчик Александр</h3>

            <ul class="rate__list">
              <li class="rate__item">
                <p class="item__title">Время в пути</p>
                <p class="item__stat">12 ч. 38 мин.</p>
              </li>
              <li class="rate__item">
                <p class="item__title">Совпадений по интересам</p>
                <p class="item__stat">3</p>
              </li>
              <li class="rate__item">
                <p class="item__title">Маршрут следования</p>
                <p class="item__stat">
                  Хабаровск<br>
                  Владивосток
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="star-list">
          <button class="star" @click="toggleStar(index)" v-for="index in 5" :key="index">
            <star-icon :index="index" :currentStar="currentStar" />
          </button>
        </div>

        <div class="rate__footer">
          <button class="footer__button">Связаться с Александром</button>
        </div>
      </div>

      <div class="rate__other">
        <p class="other__title">Оцените других попутчиков</p>

        <ul class="other__list">
          <li class="other__item">
            <img src="../assets/img/chel2.png" alt="">
          </li>
          <li class="other__item">
            <img src="../assets/img/chel3.png" alt="">
          </li>
          <li class="other__item">
            <img src="../assets/img/chel4.png" alt="">
          </li>
          <li class="other__item">
            <img src="../assets/img/chel5.png" alt="">
          </li>
          <li class="other__item">
            <img src="../assets/img/chel6.png" alt="">
          </li>
          <li class="other__item">
            <img src="../assets/img/chel7.png" alt="">
          </li>
        </ul>

        <router-link to="/" class="rate__back">Назад</router-link>
      </div>

    </div>
  </section>
</template>

<script>
import starIcon from "@/components/icons/star-icon";
import {ref} from "vue";

export default {
  name: "rate-page",
  components: {
    starIcon
  },
  setup() {

    const currentStar = ref(0);

    function toggleStar(index) {
      currentStar.value = index;
    }

    return { currentStar, toggleStar }

  }
}
</script>

<style scoped>

</style>