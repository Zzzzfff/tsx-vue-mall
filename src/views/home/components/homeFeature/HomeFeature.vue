<template>
  <div class="home-feature">
    <img src="~@/assets/images/home/recommend_bg.jpg" alt />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HomeFeature extends Vue {}
</script>

<style scoped lang="less">
.home-feature {
  margin-top: 10px;
  img {
    width: 100%;
  }
}
</style>