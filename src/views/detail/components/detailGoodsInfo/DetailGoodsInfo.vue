<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detailinfo">
    <div class="desc">{{detailInfo.desc}}</div>
    <div v-for="(Mainitem,Mainindex) in detailInfo.detailImage" :key="Mainindex" class="image">
      <div class="image_desc">{{Mainitem.key}}</div>
      <div v-for="(item,index) in Mainitem.list" :key="index" class="imagelist">
        <img :src="item" alt class="imglist" @load="imageLoad" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "DetailGoodsInfo"
})
export default class DetailGoodsInfo extends Vue {
  @Prop(Object) public detailInfo: any;
  public counter = 0;
  public imagesLength = 0;

  imageLoad() {}
}
</script>

<style scoped lang="less">
.detailinfo {
  padding: 0 5px;
  border-bottom: 10px solid #d2d2d2;
  .desc {
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
    font-size: 16px;
  }
  .image {
    .image_desc {
      height: 44px;
      line-height: 44px;
      font-size: 16px;
    }
    .imglist {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
}
</style>