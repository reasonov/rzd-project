<template>
  <section class="form-page">
    <div class="form__container">
      <div class="form__header">
        <div class="form__left">
          <h2 class="form__title title">Анкета</h2>
          <p class="form__subtitle subtitle">Ответьте на пару вопросов о себе</p>
        </div>

        <form-scale @emitFormData="updateState($event)" />

      </div>

      <div class="block-wrapper">
        <article class="form__block">
          <p class="block__title">Пол</p>
          <div class="block__main">
            <button
                class="block__stat"
                @click="updateState({type: 'gender', value: 'Мужчина'})"
            >
              <img src="../assets/img/male.png" alt="">
            </button>
            <button
                class="block__stat"
                @click="updateState({type: 'gender', value: 'Женщина'})"
            >
              <img src="../assets/img/female.png" alt="">
            </button>
          </div>
        </article>

        <article class="form__block">
          <p class="block__title">Дата рождения</p>
          <input class="block__date" type="date" @input="updateAge">
        </article>

        <article class="form__block">
          <p class="block__title">Общительность</p>
          <div class="block__main block__main1">
            <div class="toggle-wrapper">
              <button class="block__toggle block__toggle1" @click="toggleSociability(1)">
                <arrow-icon />
              </button>
              <button class="block__toggle" @click="toggleSociability(-1)">
                <arrow-icon />
              </button>
            </div>
            <span>{{ userData.talkative }}</span>
          </div>
        </article>

        <article class="form__block">
          <p class="block__title">Отношение к курению</p>
          <form-block-main
              dataType="smoking"
              :stateType="0"
          />
        </article>

        <article class="form__block">
          <p class="block__title">Отношение к детям</p>
          <form-block-main
              dataType="kids"
              :stateType="0"
          />
        </article>

        <article class="form__block">
          <p class="block__title">Отношение к животным</p>
          <form-block-main
              dataType="animals"
              :stateType="0"
          />
        </article>

        <article class="form__block">
          <p class="block__title">Семейное положение</p>
          <form-block-main
              dataType="familyStatus"
              :stateType="1"
          />
        </article>

        <article class="form__block" @click="toggleTextArea(1)">
          <p class="block__title">Интересы</p>
          <div class="block__main">
            <arrow-icon />
            Не выбрано

            <div class="form__input-wrapper" v-show="textArea === 1">
              <textarea
                  class="form__textarea"
                  placeholder="Введите свои интересы"
                  v-model="interest"
              />
              <button class="textarea__submit" @click.stop="toggleTextArea(0)">Добавить</button>
            </div>

          </div>

        </article>

        <article class="form__block" @click="toggleTextArea(2)">
          <p class="block__title">Владение языками</p>
          <div class="block__main">
            <arrow-icon />
            Не выбрано

            <div class="form__input-wrapper" v-show="textArea === 2">
              <textarea
                  class="form__textarea"
                  placeholder="Введите свои интересы"
                  v-model="languages"
              />
              <button class="textarea__submit" @click.stop="toggleTextArea(0)">Добавить</button>
            </div>

          </div>
        </article>
      </div>

      <router-link to="/ticket" class="form__save">Сохранить результаты</router-link>
    </div>

  </section>
</template>

<script>
import arrowIcon from "@/components/icons/arrow-icon";
import formBlockMain from "@/components/form-block-main";
import formScale from "@/components/form-scale";
import { useStore } from 'vuex';
import {ref, computed} from "vue";

export default {
  name: "home-page",
  components: {
    arrowIcon,
    formBlockMain,
    formScale
  },
  setup() {

    const store = useStore();

    const userData = computed(() => store.state.userData);

    function toggleSociability(index) {
      if(userData.value.talkative === 5 && index > 0) {
        return
      } else if(userData.value.talkative === 0 && index < 0) {
        return
      } else {
        let value = userData.value.talkative;
        value += index;
        store.commit('updateState', {type: 'talkative', value: value});
      }
    }

    function updateAge() {
      const date = new Date();
      const currentYear = date.getFullYear();
      const dateArr = event.target.value.split('');
      while(dateArr.length > 4) {
        dateArr.pop();
      }
      const userYear = Number(dateArr.join(''));

      const value = currentYear - userYear;
      store.commit('updateState', {type: 'age', value: value})
    }

    function updateState(data) {
      store.commit('updateState', {type: data.type, value: data.value})
    }

    const textArea = ref(0);

    function toggleTextArea(index) {
      textArea.value = index;

      if(index === 0) {
        textToArray(interest, 'interests')
        textToArray(languages, 'languages')
      }
    }

    function textToArray(item, array) {

      const arr = item.value.split(' ');
      store.commit('pushToArray', {type: array, value: arr});

    }

    const interest = ref('');

    const languages = ref('');

    return {
      toggleSociability,
      userData,
      updateAge,
      updateState,
      textArea,
      toggleTextArea,
      interest,
      languages
    }

  }
}
</script>

<style scoped>

</style>