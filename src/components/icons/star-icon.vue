<template>
  <svg width="58" height="52" viewBox="0 0 58 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path :class="{'star--active': currentStar >= index}" d="M28.0561 1.72523C28.3686 0.832268 29.6314 0.832271 29.9439 1.72523L35.4454 17.4478C35.8665 18.6512 37.0022 19.4569 38.2771 19.4569H55.7464C56.733 19.4569 57.1235 20.7342 56.3057 21.2859L42.4339 30.6445C41.3037 31.4069 40.8298 32.8355 41.28 34.1223L46.6376 49.4334C46.9555 50.3418 45.9323 51.1309 45.1345 50.5927L30.6778 40.8395C29.6639 40.1555 28.3361 40.1555 27.3222 40.8395L12.8655 50.5927C12.0677 51.1309 11.0445 50.3418 11.3624 49.4334L16.72 34.1223C17.1702 32.8355 16.6963 31.4069 15.5661 30.6445L1.69435 21.2859C0.876495 20.7342 1.26706 19.4569 2.25362 19.4569H19.7229C20.9979 19.4569 22.1335 18.6512 22.5546 17.4478L28.0561 1.72523Z" fill="#606060" fill-opacity="0.8" stroke="#606060" stroke-width="2"/>
  </svg>
</template>

<script>
export default {
  name: "star-icon",
  props: {
    index: {
      type: Number,
      required: false
    },
    currentStar: {
      type: Number,
      required: false
    }
  }
}
</script>

<style scoped>
.star--active {
  fill: #C4C4C4!important;
}
</style>