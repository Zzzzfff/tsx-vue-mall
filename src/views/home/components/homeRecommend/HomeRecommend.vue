<template>
  <div class="home-recommend">
    <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
      <img :src="item.image" alt />
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HomeRecommend extends Vue {
  @Prop(Array) private recommends!: any[];
}
</script>

<style scoped lang="less">
.home-recommend {
  display: flex;
  width: 100%;
  height: 6.7rem;
  padding-bottom: 0.8rem;
  margin-bottom: 1px solid black;
  box-shadow: 0 10px 0px rgba(0, 0, 0, 0.1);
  & .recommend-item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 0.8rem;
    img {
      width: 70%;
      margin-bottom: 5px;
    }
  }
}
</style>