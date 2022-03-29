<template>
  <section class="ticket-page">
    <div class="ticket__container">
      <h2 class="ticket__title title">Покупка билетов</h2>

      <div class="train__list">
        <button
            :class="['train__item', {'train__item--active': train === index}]"
            @click="selectTrain(index)"
            v-for="index in 3"
            :key="index"
        >
          Вагон {{ index }}
        </button>
      </div>

      <div class="ticket__main">
        <div class="ticket__section" v-for="blockIndex in 6" :key="blockIndex">
<!--          [((blockIndex - 1) * 4 + itemIndex) - 1]-->
          <ticket-place
              :placeData="users"
              :index="((blockIndex - 1) * 4 + itemIndex)"
              v-for="itemIndex in 4"
              :key="itemIndex"
          >
            {{ (blockIndex - 1) * 4 + itemIndex }}
          </ticket-place>

        </div>

        <div class="ticket__section ticket__section--wc">
          <p class="toilet">WC</p>
        </div>
        <div class="ticket__section ticket__section--wc">
          <p class="toilet">WC</p>
        </div>

        <div class="hall">
          <span class="window window1"></span>
          <span class="window window2"></span>
          <span class="window window3"></span>
        </div>
      </div>

      <div class="ticket__info">
        <div class="info__item">
          <span class="info__color disabled"></span>
          <p class="info__text">Свободно</p>
        </div>
        <div class="info__item">
          <span class="info__color no-info"></span>
          <p class="info__text">Нет данных о соседях</p>
        </div>
        <div class="info__item">
          <span class="info__color not-recommended"></span>
          <p class="info__text">Не рекомендуется</p>
        </div>
        <div class="info__item">
          <span class="info__color recommended"></span>
          <p class="info__text">Рекомендуется</p>
        </div>
      </div>

      <button class="ticket__buy">Купить</button>

    </div>
  </section>
</template>

<script>
import users from '../data/n914546v_db';
import ticketPlace from "@/components/ticket-place";
import {ref} from "vue";

export default {
  name: "ticket-page",
  components: {
    ticketPlace
  },
  setup() {

    console.log(users)

    const train = ref(1);

    function selectTrain(index) {
      train.value = index;
    }

    return { train, selectTrain, users }

  }
}
</script>

<style scoped>

</style>