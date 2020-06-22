<template>
  <div class="home-swiper">
    <el-carousel height="220px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img :src="item.image" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "HomeSwiper"
})
export default class HomeSwiper extends Vue {
  @Prop(Array) private banners!: any[];
}
</script>

<style scoped lang="less">
.home-swiper {
  & img {
    width: 100%;
  }
}
</style>