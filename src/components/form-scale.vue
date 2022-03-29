<template>
  <div class="form__scale">
    <h3 class="scale__title">Шкала храпа</h3>
    <div class="scale__list">
      <button
          :class="['scale__item', {'scale__item--active': scale >= index}]"
          @click="toggleScale(index)"
          v-for="index in 6"
          :key="index"
      >
        {{ index - 1 }}
      </button>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import { useStore } from 'vuex';

export default {
  name: "form-scale",
  setup() {

    const store = useStore();

    const scale = ref(0);

    function toggleScale(index) {
      scale.value = index;

      store.commit('updateState', {type: 'snoring', value: scale.value});

    }

    return { scale, toggleScale }

  }
}
</script>

<style scoped>

</style>