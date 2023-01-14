<template>
  <div class="header">
    <img
      class="background no-responsive"
      src="../assets/soon/1200.png"
      alt="Lepacion fondo"
    />
    <img
      class="background responsive"
      src="../assets/soon/768.png"
      alt="Lepacion fondo"
    />
    <img
      class="background responsive-sm"
      src="../assets/soon/500.png"
      alt="Lepacion fondo"
    />
    <!-- <img class="logo" src="../assets/logo.svg" alt="Itacalli" /> -->
  </div>
</template>

<script>
export default {
  name: "component-soon",
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #000;
  overflow: hidden;
  .no-responsive {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .responsive {
    display: none;
    @media (min-width: 577px) and (max-width: 768px) {
      display: block;
    }
  }
  .responsive-sm {
    display: none;
    @media screen and (max-width: 576px) {
      display: block;
    }
  }
  .background {
    width: 100%;
    height: 100%;
    object-fit: contain;
    @media screen and (max-width: 500px) {
      object-fit: cover;
    }
  }
  .logo {
    position: absolute;
    width: 400px;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 900px) {
      width: 300px;
    }
    @media screen and (max-width: 576px) {
      width: 250px;
    }
  }
}
</style>
