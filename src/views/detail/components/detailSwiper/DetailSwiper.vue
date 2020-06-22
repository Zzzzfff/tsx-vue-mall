<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="img" v-for="(img, index) in topImages">
        <img :src="img" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true
      }
    };
  },
  props: {
    topImages: {
      type: Array,
      default: []
    }
  },
  mounted() {
    // console.log("Current Swiper instance object", this.mySwiper);
    this.mySwiper.slideTo(0, 1000, false);
  }
};
</script>
<style lang="less" scoped>
.swiper-wrapper {
  .swiper-slide {
    height: 18.5rem;
    img {
      width: 100%;
    }
  }
}
</style>