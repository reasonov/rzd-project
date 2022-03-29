<template>
  <div class="block__main" @click="changeState">
    <arrow-icon />
    {{ stateArr[stateType][currentState] }}
  </div>
</template>

<script>
import arrowIcon from "@/components/icons/arrow-icon";
import { useStore } from 'vuex';
import {ref} from "vue";

export default {
  name: "form-block-main",
  components: {
    arrowIcon
  },
  props: {
    stateType: {
      type: Number,
      required: false
    },
    dataType: {
      type: String,
      required: false
    }
  },
  setup(props) {

    const store = useStore();

    const stateArr = [
      [
          'Негативное',
          'Нейтральное',
          'Позитивное'
      ],
      [
        'Свободен',
        'Занят',
        'В поиске'
      ],
    ]

    const currentState = ref(1);

    function changeState() {
      if(currentState.value < 2) {
        currentState.value++;
      } else {
        currentState.value = 0;
      }

      store.commit('updateState', {
        type: props.dataType,
        value: currentState.value
      })
    }

    return { stateArr, currentState, changeState }

  }
}
</script>

<style scoped>

</style>