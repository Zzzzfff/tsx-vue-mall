<template>
  <div class="goods-info" @click="imageClick" v-if="goodsInfo">
    <img :src="showImg" alt @load="imageLoad" />
    <div class="goods-detail">
      <p>{{goodsInfo.title}}</p>
      <span class="price">{{goodsInfo.price}}</span>
      <span class="collect">{{goodsInfo.cfav}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface Goods {
  iid: string;
  show?: any;
  image?: string;
  title: string;
  price: string;
  cfav: string;
}

@Component
export default class GoodsInfo extends Vue {
  @Prop(Object) public goodsInfo!: Goods;

  get showImg() {
    return this.goodsInfo.image || this.goodsInfo.show.img;
  }

  private imageClick(): void {
    this.$router.push(`/detail/${this.goodsInfo.iid}`);
  }

  private imageLoad(): void {
    this.$bus.$emit("imageLoad");
  }
}
</script>

<style scoped lang="less">
.goods-info {
  position: relative;
  height: 310px;
  width: 48%;
  margin-top: 5px;

  img {
    width: 100%;
    border-radius: 5px;
    border: 3px solid var(--color-tint);
  }

  & .goods-detail {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 4px;
      font-size: 0.9rem;
    }

    .price {
      margin-right: 15px;
      color: var(--color-high-text);
    }
    .collect {
      position: relative;
      margin-left: 15px;
      &::before {
        content: "";
        position: absolute;
        left: -15px;
        top: 1px;
        width: 14px;
        height: 14px;
        background: ~'url("~assets/images/common/collect.svg")' no-repeat center/120%;
      }
    }
  }
}
</style>