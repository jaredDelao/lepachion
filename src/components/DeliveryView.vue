<template>
  <div class="delivery">
    <div class="title">
      <h4 class="title-desktop">OUR DELIVERY - PICK UP</h4>
      <h4 class="title-responsive">
        OUR DELIVERY <br />
        PICK UP
      </h4>
      <div class="line"></div>
    </div>
    <div class="delivery__apps">
      <div class="cards">
        <a
          target="_blank"
          href="https://www.grubhub.com/restaurant/le-pachion---international-fusion-2353-e-12st-oakland/4842648"
          ><img src="../assets/Grubhub.png" alt="Grubhub"
        /></a>
        <a href="#"><img src="../assets/Doordash.png" alt="Doordash" /></a>
        <a
          target="_blank"
          href="https://www.ubereats.com/store/le-pachion-international-fusion/UvZyewJbWC-nbVe16YG2XA?diningMode=DELIVERY"
          ><img src="../assets/UberEats.png" alt="Uber Eats"
        /></a>
        <a
          target="_blank"
          href="https://www.yelp.com/biz/le-pachion-international-fusion-oakland"
          ><img src="../assets/yelp.png" alt="Yelp"
        /></a>
      </div>
    </div>
    <div class="delivery__btn-order">
      <button type="button">Order Here</button>
    </div>
  </div>

  <div class="delivery__contact">
    <div class="delivery__contact-container">
      <div class="text">
        <p class="title-contact">CONTACT <br class="hide-xs" />& LOCATION</p>
        <div class="items">
          <div class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <title>Mail</title>
              <path
                d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z"
              />
            </svg>
            <span>&nbsp; info@lepachion.com</span>
          </div>
          <div class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Location</title>
              <path
                d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"
              />
            </svg>
            <span
              >&nbsp; 2353 E 12th St, Oakland, CA 94601, United States.</span
            >
          </div>
        </div>
      </div>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12613.402256662435!2d-122.2362288!3d37.7818234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xce896ead087c5179!2sLe%20Pachion%20-%20International%20Fusion!5e0!3m2!1sen!2smx!4v1673054697943!5m2!1sen!2smx"
          width="100%"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="rss">
      <div class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          fill="currentColor"
        >
          <path
            d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"
          />
        </svg>
      </div>
      <div class="icon">
        <a
          href="https://www.instagram.com/lepachion/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <title>Logo Instagram</title>
            <path
              d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
            />
            <path
              d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="line"></div>
    <p>Mangan 2021©, All rights reserved.</p>
  </div>
</template>

<script>
export default {
  name: "DeliveryView",
};
</script>
<style lang="scss" scoped>
a {
  color: inherit;
}
.delivery {
  position: relative;
  width: 95%;
  height: 100%;
  margin: auto;
  padding: 30px 0;
  &__apps {
    width: 100%;
    .cards {
      display: grid;
      justify-content: center;
      align-items: center;
      grid-template-columns: repeat(auto-fit, 200px);
      @media screen and (max-width: 735px) {
        grid-template-columns: repeat(3, 170px);
      }
      @media screen and (max-width: 550px) {
        grid-template-columns: repeat(auto-fit, minmax(120px, 170px));
      }
      img {
        max-width: 200px;
        width: 100%;
      }
    }
  }
  &__btn-order {
    width: 100%;
    text-align: center;
    button {
      padding: 9px 25px;
      font-size: 1em;
      background: #ffffff;
      color: #000;
      border: 2px solid #e1ae24;
      font-family: "Arial";
      font-weight: normal;
      box-shadow: 3px 5px 12px rgb(227, 227, 227);
    }
  }
  &__contact {
    background: #000;
    padding: 30px;
    &-container {
      max-width: 1200px;
      width: 100%;
      margin: auto;
      display: grid;
      gap: 10px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;

      @media screen and (max-width: 765px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
      }

      .text {
        color: #fff;
        font-weight: 500;
        font-family: "Balboa", Arial;
        display: flex;
        flex-direction: column;
        .title-contact {
          line-height: 50px;
          font-size: 3em;
          margin-bottom: 20px;
          @media screen and (max-width: 765px) {
            line-height: 30px;
            font-size: 2em;
          }
        }

        .items {
          .item {
            display: flex;
            align-items: flex-start;
            margin: 10px auto;
            svg {
              width: 25px;
              border: 1px solid white;
              background: #fff;
              color: #000;
              border-radius: 50px;
              padding: 3px;
            }
          }
        }
      }
    }
  }

  .title-responsive {
    display: none;
  }

  @media screen and (max-width: 575px) {
    .title-desktop {
      display: none;
    }
    .title-responsive {
      display: block;
    }
  }

  .title {
    text-align: center;
    width: 100%;
    text-align: center;
    color: #e1ae24;
    font-size: 2em;
    font-weight: 500;
    font-family: "Balboa", Arial;
    margin-bottom: 50px;
    @media screen and (max-width: 992px) {
      font-size: 2em;
      line-height: 40px;
    }
  }
}
.footer {
  background: #e1ae24;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  font-family: "Poppins";
  color: #000;
  .line {
    height: 1px;
    background: #000;
    width: 80%;
    margin: 10px 0;
  }
  .rss {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    .icon {
      margin: auto 10px;
      width: 40px;
      height: 40px;
      border: 1px solid #000;
      border-radius: 50px;
      padding: 10px;
      color: #000;
      cursor: pointer;
      &:hover {
        color: #e1ae24;
        background: #000;
      }
    }
  }
}
@media screen and (max-width: 550px) {
  .hide-xs {
    display: none;
  }
}
</style>
