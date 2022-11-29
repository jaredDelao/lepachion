<template>
  <!-- <swiper
    :modules="modules"
    :slides-per-view="1"
    :direction="'vertical'"
    :pagination="{
      clickable: true,
      bulletClass: 'swiper-pagination-bullet custom-bullet-main',
      bulletActiveClass:
        'swiper-pagination-bullet-active custom-bullet-main-active',
    }"
    mousewheel
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide><HeaderView /></swiper-slide>
    <swiper-slide><PhilosophyView /></swiper-slide>
    <swiper-slide><MenuView /></swiper-slide>
    <swiper-slide><DeliveryView /></swiper-slide>
  </swiper> -->
  <HeaderView />
  <PhilosophyView />
  <MenuView />
  <DeliveryView />
</template>

<script>
// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Mousewheel,
//   FreeMode,
// } from "swiper";
// Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from "swiper/vue";

import HeaderView from "./HeaderView.vue";
import PhilosophyView from "./PhilosophyView.vue";
import DeliveryView from "./DeliveryView.vue";
import MenuView from "./MenuView.vue";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

export default {
  components: {
    HeaderView,
    PhilosophyView,
    DeliveryView,
    MenuView,
  },
  // setup() {
  //   const onSwiper = (swiper) => {
  //     console.log(swiper);
  //   };
  //   const onSlideChange = () => {
  //     console.log("slide change");
  //   };
  //   return {
  //     onSwiper,
  //     onSlideChange,
  //     modules: [Navigation, Pagination, Scrollbar, A11y, Mousewheel, FreeMode],
  //   };
  // },
};
</script>
<style lang="scss" scoped>
.swiper {
  height: 100vh;
  width: 100%;
}
</style>
