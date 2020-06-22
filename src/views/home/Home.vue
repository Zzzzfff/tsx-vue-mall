<template>
  <div class="home">
    <HomeNavbar></HomeNavbar>
    <TabNav
      ref="fixedTab"
      :names="tabNames"
      @navClick="navClick"
      v-show="isShowFixedTab"
      class="fixed"
    ></TabNav>
    <mescroll ref="homescroll" @getData="getData" @onScroll="onScroll">
      <HomeSwiper :banners="banners"></HomeSwiper>
      <HomeRecommend :recommends="recommends"></HomeRecommend>
      <HomeFeature></HomeFeature>
      <TabNav ref="tabCtrl" :names="tabNames" @navClick="navClick"></TabNav>
      <GoodsList :goods="goods[tabType].list"></GoodsList>
    </mescroll>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import HomeNavbar from "./components/homeNavbar/HomeNavbar";
import HomeSwiper from "./components/homeSwiper/homeSwiper";
import HomeRecommend from "./components/homeRecommend/HomeRecommend";
import HomeFeature from "./components/homeFeature/HomeFeature";
import TabNav from "@/components/common/tabNav/TabNav.tsx";
import GoodsList from "@/components/content/goods/GoodsList";
import mescroll from "@/components/common/scroll/mescroll";
import { getHomeMultidata, getHomeGood } from "@/api/home";
import { debounce } from "@/common/utils.ts";

@Component({
  name: "Home",
  components: {
    HomeNavbar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabNav,
    GoodsList,
    mescroll
  }
})
export default class Home extends Vue {
  banners = [];
  recommends = [];
  tabNames = ["流行", "新款", "精选"];
  tabType = "pop";
  goods = {
    pop: { page: 0, list: [] },
    new: { page: 0, list: [] },
    sell: { page: 0, list: [] }
  };
  scrollTop = 0;
  isShowFixedTab = false;

  mounted() {
    this.getHomeMultidatas();
    this.getData();
    debounce(this.imgDebounce, 1000);
  }

  onScroll(y) {
    this.scrollTop = y;
    this.isShowFixedTab = this.$refs.tabCtrl.$el.offsetTop < y;
  }

  // 页面切换保持mescroll位置状态
  activated() {
    this.$refs.homescroll.mescroll.scrollTo(this.scrollTop, 0);
  }

  // 监听图片加载
  imgDebounce() {
    this.$bus.$on("imageLoad", () => {
      console.log(1);
    });
  }

  // 获取轮播图数据
  getHomeMultidatas() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }

  // 获取goods数据
  getHomeGoods(type) {
    const page = this.goods[type].page + 1;
    getHomeGood(type, page).then(res => {
      this.goods[type].list.push(...res.data.list);
      this.goods[type].page = page;
    });
    // 结束上拉操作
    if (this.$refs.homescroll.mescroll) {
      this.$refs.homescroll.mescroll.endUpScroll(null);
    }
  }

  // 获取goods数据封装函数
  getData() {
    this.getHomeGoods(this.tabType);
  }

  // tabCtrl点击事件
  navClick(index) {
    switch (index) {
      case 0:
        this.tabType = "pop";
        break;
      case 1:
        this.tabType = "new";
        break;
      case 2:
        this.tabType = "sell";
        break;
    }
    this.getData();
    this.$refs.fixedTab.currentIndex = index;
    this.$refs.tabCtrl.currentIndex = index;
  }
}
</script>
<style lang="less" scoped>
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 48px;
  z-index: 9;
}
</style>
