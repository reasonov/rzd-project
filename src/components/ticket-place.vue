<template>
  <div
      class="place__wrapper"
      @mouseenter="togglePlace(true)"
      @mouseleave="togglePlace(false)"
  >
    <button :class="['ticket__place', setColor]">
      <slot></slot>
    </button>

    <div class="place__info" v-if="currentPlace && placeData[index].name">
      <p class="place__name">{{ placeData[index].name }}</p>

      <p class="place__stat" v-if="placeData[index].talkative == 0">Не общительный</p>
      <p class="place__stat" v-else-if="placeData[index].talkative == 1">Не очень общительный</p>
      <p class="place__stat" v-else-if="placeData[index].talkative == 2">Общительный</p>

      <p class="place__stat" v-if="placeData[index].smoking == 0">Не курит</p>
      <p class="place__stat" v-else-if="placeData[index].smoking == 1">Иногда курит</p>
      <p class="place__stat" v-else-if="placeData[index].smoking == 2">Курит</p>

      <p class="place__stat" v-if="placeData[index].animals == 0">Не любит животных</p>
      <p class="place__stat" v-else-if="placeData[index].animals == 1">Без животных</p>
      <p class="place__stat" v-else-if="placeData[index].animals == 2">С животными</p>

      <ul class="stat__list">
        <li class="stat__item" v-for="item in placeData[index].interests" :key="item">
          <span>#{{ item }}</span>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import {ref, computed} from "vue";

export default {
  name: "ticket-place",
  props: {
    placeData: {
      type: Object,
      required: false
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props) {

    const store = useStore();

    const user = computed(() => store.state.userData);

    const userPlace = ref();

    props.placeData.forEach((item) => {
      if(Number(item.place) === props.index) {
        userPlace.value = item;
      }
    })

    const result = ref(0);

    function includeItem(param) {

      let includes = 0;

      user.value[param].forEach((item) => {

        let a;
        let b;

        if(typeof user.value[param] === 'string') {
          a = userPlace.value[param].toLowerCase()
          b = item.toLowerCase()
        }

        if([a].includes(b)) {
          includes++;

        } else {
          includes--;

        }
      })

      if(includes > 0) {
        result.value += 2;
      } else {
        result.value -= 2;
      }

    }

    function recommended() {
      if(userPlace.value) {
        for(let param in user.value) {

          if(param === 'age') {
            if(Math.abs(user.value[param] - userPlace.value[param]) < 4) {
              result.value += 2;

            } else {
              result.value -= 4;

            }
          } else if(param === 'interests') {

            includeItem(param);

          } else if(param === 'languages') {

            includeItem(param);

          } else if(param === 'familyStatus') {
            if(user.value[param] === 'search' && userPlace.value[param] === 'search') {
              if(user.value.gender != userPlace.value.gender) {
                result.value += 5;
              }
            }
          } else if(param === 'gender') {
            console.log('asd')
          } else {

            result.value += 5 - user.value[param] - Number(userPlace.value[param]);

          }

        }
      } else {
        result.value = null;
      }

    }
    recommended();

    const setColor = computed(() => {
      if(result.value && result.value > 5) {
        return 'recommended'
      } else if(result.value && result.value < 5 || result.value === 0) {
        return 'not-recommended'
      }
      return 'disabled'
    })

    const currentPlace = ref(false);

    function togglePlace(state) {
      currentPlace.value = state;
    }

    return { result, setColor, currentPlace, togglePlace, userPlace }

  }
}
</script>

<style scoped>
.place__wrapper {
  position: relative;
}

.place__info {
  position: absolute;
  top: 100px;
  left: 0;
  z-index: 2;

  width: 185px;
  padding: 15px;
  border-radius: 12px;

  background-color: #b1b2c9;
}

.place__stat {
  margin-top: 10px;
}

.stat__list {
  display: flex;
  flex-wrap: wrap;
}

.stat__item {
  margin-top: 10px;
  margin-left: 10px;
}

.stat__item span {
  padding: 3px;
  opacity: 0.7;
  border-radius: 12px;

  background-color: #f5e526;
}
</style>