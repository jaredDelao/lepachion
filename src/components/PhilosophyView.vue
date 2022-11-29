<template>
  <div class="philosophy">
    <div class="container">
      <img src="../assets/images/philosphy-top.jpeg" class="img-top" />
      <div class="text">
        <h2>Our Seasoning</h2>
        <h4>
          Le pachion <br />
          The flavor of our land. We offer a variety of home cooking, prepared
          with fresh, natural products and with the seasoning that grandma had;
          we prepare dishes that recall our roots, that taste of love and
          nostalgia.
        </h4>
      </div>
      <img src="../assets/images/philosophy-bot.jpeg" class="img-bot" />
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
      width: 100%;
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
