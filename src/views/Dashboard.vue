<style lang="scss">
  .dashboard {

  }
</style>
<template>
  <div class="dashboard">
<!--    <h1 class="">Pokemon</h1>-->

<!--    <pokeball></pokeball>-->
    <aframe-play></aframe-play>
  </div>
</template>

<script>
// import three from '../components/three.vue';
// import threePlay from '@/components/threePlay';
// import pokeball from '@/components/pokeball/pokeball';
import aframePlay from '@/components/aframePlay';
  export default {
    name: 'dashboard',
    components: {
      // three,
      // pokeball,
      aframePlay,
    },
    data() {
      return {};
    },
    mounted() {

    },
    methods: {

    }
  }
</script>
