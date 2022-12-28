<template>
  <div class="philosophy">
    <div class="container">
      <img src="../assets/images/philosphy-top.jpg" class="img-top" />
      <div class="text">
        <h2>Our Seasoning</h2>
        <h4>
          When was the last time your palate exploded when trying a dish? We are
          not only food, we are elegance, flavor, freshness. We are delicious.
          Designed for adventurers who want new culinary experiences with
          flavors that go back to their roots. Dare and order.
        </h4>
      </div>
      <img src="../assets/images/philosophy-bot.jpg" class="img-bot" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PhilosophyView",
};
</script>
<style lang="scss" scoped>
.philosophy {
  position: relative;
  width: 95%;
  height: 100%;
  margin: auto;
  padding: 10% 0;
  background-color: #ffffff;

  .container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto 1fr;
    place-items: center;
    gap: 20px;

    @media screen and (max-width: 992px) {
    }

    .img-top,
    .img-bot {
      width: 80%;
      height: auto;
    }

    .text {
      max-width: 80%;
      margin: auto;
      h2 {
        text-align: center;
        font-family: "Balboa", Arial;
        text-transform: uppercase;
        font-size: 2em;
        color: #e1ae24;
      }
      h4 {
        color: #8a8783;
        font-size: 1.2em;
        text-align: justify;
        @media screen and (max-width: 992px) {
          font-size: 1em;
        }
      }
    }
  }
}
</style>
