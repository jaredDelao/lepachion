<template>
  <div class="menu">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :pagination="{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet custom-bullet-menu',
        bulletActiveClass:
          'swiper-pagination-bullet-active custom-bullet-menu-active',
      }"
    >
      <swiper-slide v-for="img in imgCarrusel" :key="img.name">
        <div class="content-slide">
          <div class="images">
            <img
              class="no-responsive img-slide"
              :src="img.path"
              :alt="img.name"
            />
            <img
              class="img-slide responsive"
              :src="img.pathResponsive"
              :alt="img.name"
            />
          </div>
          <div class="container">
            <div class="container__text">
              <h4>OUR MENU</h4>
            </div>

            <div class="title-name">
              <h3>{{ img.name }}</h3>
            </div>

            <div class="percents">
              <div
                class="percents__box"
                v-for="percent in img.percents"
                :key="percent.name"
              >
                <p>{{ percent.value }}</p>
                <p>{{ percent.name }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="content-slide-responsive">
          <div class="container-text">
            <h4>OUR MENU</h4>
          </div>
          <div class="images">
            <img
              class="no-responsive img-slide"
              :src="img.path"
              :alt="img.name"
            />
            <img
              class="img-slide responsive"
              :src="img.pathResponsive"
              :alt="img.name"
            />
          </div>
          <div class="container">
            <div class="title-name">
              <h3>{{ img.name }}</h3>
            </div>

            <div class="percents">
              <div
                class="percents__box"
                v-for="percent in img.percents"
                :key="percent.name"
              >
                <p>{{ percent.value }}</p>
                <p>{{ percent.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Pagination, A11y } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// images
import imgMenu1 from "../assets/images/slider/menu1.jpg";
import imgMenu1Res from "../assets/images/slider/menu1.jpg";

import imgMenu2 from "../assets/images/slider/menu2.jpg";
import imgMenu2Res from "../assets/images/slider/menu2.jpg";

import imgMenu3 from "../assets/images/slider/menu3.jpg";
import imgMenu3Res from "../assets/images/slider/menu3.jpg";

import imgMenu4 from "../assets/images/slider/menu4.jpg";
import imgMenu4Res from "../assets/images/slider/menu4.jpg";

import imgMenu5 from "../assets/images/slider/menu5.jpg";
import imgMenu5Res from "../assets/images/slider/menu5.jpg";

import imgMenu6 from "../assets/images/slider/menu6.jpg";
import imgMenu6Res from "../assets/images/slider/menu6.jpg";

import imgMenu7 from "../assets/images/slider/menu7.jpg";
import imgMenu7Res from "../assets/images/slider/menu7.jpg";
export default {
  name: "MenuView",
  data: () => {
    return {
      imgCarrusel: [
        {
          name: "Menu1",
          path: imgMenu1,
          pathResponsive: imgMenu1Res,
          percents: [
            { name: "Natural", value: "100%" },
            { name: "Gourmet", value: "100%" },
            { name: "Product", value: "100%" },
          ],
        },
        {
          name: "Menu2",
          path: imgMenu2,
          pathResponsive: imgMenu2Res,
          percents: [
            { name: "Natural", value: "100%" },
            { name: "Gourmet", value: "100%" },
            { name: "Product", value: "100%" },
          ],
        },
        {
          name: "Menu3",
          path: imgMenu3,
          pathResponsive: imgMenu3Res,
          percents: [
            { name: "Natural", value: "100%" },
            { name: "Gourmet", value: "100%" },
            { name: "Product", value: "100%" },
          ],
        },
        {
          name: "Menu4",
          path: imgMenu4,
          pathResponsive: imgMenu4Res,
          percents: [
            { name: "Natural", value: "100%" },
            { name: "Gourmet", value: "100%" },
            { name: "Product", value: "100%" },
          ],
        },
        {
          name: "Menu5",
          path: imgMenu5,
          pathResponsive: imgMenu5Res,
          percents: [
            { name: "Natural", value: "100%" },
            { name: "Gourmet", value: "100%" },
            { name: "Product", value: "100%" },
          ],
        },
        {
          name: "Menu6",
          path: imgMenu6,
          pathResponsive: imgMenu6Res,
          percents: [
            { name: "Natural", value: "100%" },
            { name: "Gourmet", value: "100%" },
            { name: "Product", value: "100%" },
          ],
        },
        {
          name: "Menu7",
          path: imgMenu7,
          pathResponsive: imgMenu7Res,
          percents: [
            { name: "Natural", value: "100%" },
            { name: "Gourmet", value: "100%" },
            { name: "Product", value: "100%" },
          ],
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, A11y],
    };
  },
};
</script>
<style lang="scss" scoped>
$md: 992px;
$sm: 576px;

.menu {
  padding: 20px 0;
  height: 100%;
  background-color: #000;
  .swiper {
    width: 100%;
    height: auto;
    .content-slide {
      display: grid;
      width: 100%;
      height: 100%;
      min-height: 70vh;
      grid-template-columns: repeat(2, 1fr);
      place-items: center;
      gap: 15px;
      @media screen and (max-width: $md) {
        display: none;
      }

      .container {
        height: 100%;
        padding-right: 15px;
        width: 100%;
        &__text {
          width: 100%;
          h4 {
            text-align: center;
            width: 100%;
            color: #f9f6f8;
            font-size: 3em;
            font-weight: 500;
            font-family: "Balboa", Arial;
            z-index: 2;
            &::after {
              content: "";
              border-bottom: 1px solid rgb(220, 220, 220);
              width: 100%;
              display: block;
            }
            @media screen and (max-width: $md) {
              // font-size: 4em;
            }
          }
        }
        .title-name {
          max-width: 400px;
          width: 100%;
          margin-top: 130px;
          h3 {
            position: relative;
            font-size: 2em;
            color: #f9f6f8;
            max-width: max-content;
            &::after {
              content: "";
              border-bottom: 1px solid rgb(220, 220, 220);
              width: 100%;
              display: block;
            }
          }
        }
        .percents {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 25px;
          p {
            color: #f9f6f8;
            font-size: 1.5em;
            line-height: 27px;
            &:nth-child(2) {
              font-weight: 700;
              max-width: max-content;
              &::after {
                content: "";
                border-bottom: 1px solid rgb(220, 220, 220);
                width: 100%;
                display: block;
              }
            }
          }
        }
      }
      .img-slide {
        width: auto;
        max-height: 500px;
        height: 100%;
        object-fit: contain;
      }
      .responsive {
        display: none;
        @media screen and (max-width: 768px) {
          display: block;
        }
      }
      .no-responsive {
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }

    .content-slide-responsive {
      width: 100%;
      height: 100%;
      max-width: 900px;
      margin: auto;
      padding: 30px;
      display: none;
      grid-template-columns: 1fr;
      place-content: center;
      gap: 15px;

      @media screen and (max-width: $md) {
        display: grid;
      }

      .container-text {
        width: 100%;
        h4 {
          text-align: center;
          width: 100%;
          color: #f9f6f8;
          font-size: 3em;
          font-weight: 500;
          font-family: "Balboa", Arial;
          z-index: 2;
          margin-bottom: 10px;
          @media screen and (max-width: $md) {
            // font-size: 4em;
          }
          &::after {
            content: "";
            border-bottom: 1px solid rgb(220, 220, 220);
            width: 70%;
            margin: auto;
            display: block;
          }
        }
      }
      .container {
        width: 100%;
        margin-bottom: 60px;
        @media screen and (max-width: $sm) {
          margin-bottom: 15px;
        }

        .title-name {
          max-width: 400px;
          width: 100%;
          h3 {
            position: relative;
            font-size: 2em;
            color: #f9f6f8;
            max-width: max-content;
            &::after {
              content: "";
              border-bottom: 1px solid rgb(220, 220, 220);
              width: 130%;
              display: block;
            }
          }
        }
        .percents {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 25px;
          p {
            color: #ffffff;
            font-size: 1.5em;
            line-height: 27px;
            &:nth-child(2) {
              font-weight: 700;
              max-width: max-content;
              &::after {
                content: "";
                border-bottom: 1px solid rgb(220, 220, 220);
                width: 100%;
                display: block;
              }
            }
          }
        }
      }
      .img-slide {
        width: 100%;
        max-height: 400px;
        height: 100%;
        object-fit: contain;
      }
      .responsive {
        display: none;
        @media screen and (max-width: 768px) {
          display: block;
        }
      }
      .no-responsive {
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  }
}
</style>
