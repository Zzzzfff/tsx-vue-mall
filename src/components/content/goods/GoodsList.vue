<template>
  <div class="goods">
    <GoodsInfo v-for="(item, index) in goods" :key="index" :goodsInfo="item"></GoodsInfo>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import GoodsInfo from "./GoodsInfo.vue";

@Component({
  name: "GoodsList",
  components: {
    GoodsInfo
  }
})
export default class GoodsList extends Vue {
  @Prop(Array) public goods!: any[];
}
</script>

<style scoped lang="less">
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>