<template>
  <div class="header">
    <img
      class="background lg"
      src="../assets/images/header.png"
      alt="Itacalli"
    />
    <img
      class="background xs"
      src="../assets/images/header-xs.jpg"
      alt="Itacalli"
    />
    <!-- <img
      class="background no-responsive"
      src="../assets/header/portada_1200.jpg"
      alt="Itacalli fondo"
    /> -->
    <!-- <img
      class="background responsive"
      src="../assets/header/portada_768.jpg"
      alt="Itacalli fondo"
    />
    <img
      class="background responsive-sm"
      src="../assets/header/portada_responsive.jpeg"
      alt="Itacalli fondo"
    /> -->
    <!-- <img class="logo" src="../assets/logo.svg" alt="Itacalli" /> -->
  </div>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>
<style lang="scss" scoped>
.xs {
  display: none;
  @media screen and (max-width: 700px) {
    display: block;
  }
}
.lg {
  display: block;
  @media screen and (max-width: 700px) {
    display: none;
  }
}
.header {
  position: relative;
  width: 100%;
  // height: 100%;
  height: 100vh;
  background: #000;
  // .break-responsive {
  //   display: none;
  //   @media screen and (max-width: 600px) {
  //     display: block;
  //   }
  // }
  // .no-responsive {
  //   @media screen and (max-width: 768px) {
  //     display: none;
  //   }
  // }
  // .responsive {
  //   display: none;
  //   @media (min-width: 577px) and (max-width: 768px) {
  //     display: block;
  //   }
  // }
  // .responsive-sm {
  //   display: none;
  //   @media screen and (max-width: 576px) {
  //     display: block;
  //   }
  // }
  .background {
    width: 100%;
    height: 100%;
    object-fit: contain;
    @media screen and (max-width: 500px) {
      object-fit: cover;
    }
  }
}
</style>
