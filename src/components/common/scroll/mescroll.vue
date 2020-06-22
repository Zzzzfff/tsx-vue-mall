	<template>
  <div id="mescroll-wrap">
    <mescroll-vue ref="mescroll" :down="down" :up="up" @init="init">
      <slot></slot>
    </mescroll-vue>
  </div>
</template>
			
<script>
// 引入mescroll的vue组件
import MescrollVue from "mescroll.js/mescroll.vue";

export default {
  components: {
    MescrollVue // 注册mescroll组件
  },
  props: {
    // 无数据提示 非必需
    emptyText: {
      type: String,
      default() {
        return "暂无相关数据";
      }
    },
    // 显示noMore条数据就显示“没有更多数据了” 非必需
    noMore: {
      type: Number,
      default() {
        return 10;
      }
    },
    // 每页多少条
    pageSize: {
      type: Number,
      default() {
        return 10;
      }
    },
    // 父ID 必需
    warpId: {
      type: String,
      default() {
        return null;
      }
    },
    // 下拉刷新的位置 非必需
    downRefresh: {
      type: String,
      default() {
        return null;
      }
    },
    // 回顶部时间 非必需
    topTime: {
      type: Number,
      default() {
        return 300;
      }
    },
    downText: {
      type: Object,
      default() {
        return {
          textInOffset:
            "<i class='iconfont icon-shang-copy'></i><span>下拉刷新</span>",
          textOutOffset:
            "<i class='iconfont icon-shang-copy-copy'></i><span>松开刷新</span>",
          textLoading: "加载中..."
        };
      }
    },
    btntext: {
      type: String,
      default() {
        return null;
      }
    }
  },
  data() {
    return {
      mescroll: null, // mescroll实例对象
      down: {
        offset: 50,
        auto: false,
        hardwareClass: "mescroll-hardware",
        resetClass: "mescroll-downwarp-reset",
        warpClass: "mescroll-downwarp",
        mustToTop: true,
        warpId: this.downRefresh, // 可配置下拉刷新的布局添加到指定id的div
        callback: this.downCallback,
        ...this.downText, // 下拉刷新文字
        htmlContent: `<div class="downwarp-onload">
                        <p class="downwarp-progress"></p>
                        <p class="downwarp-tip">加载中…</p>
                      </div`
      },
      up: {
        offset: 0,
        auto: true,
        hardwareClass: "mescroll-hardware",
        warpClass: "mescroll-upwarp",
        isBounce: true,
        callback: this.upCallback,
        htmlNodata: "<p class='upwarp-nodata'>没有更多数据啦…</p>",
        toTop: {
          //回到顶部按钮
          warpId: "mescroll-wrap", // 父元素的id; 默认添加在body中 (1.3.5版本支持传入dom元素)
          src: "./top.png", //图片路径，根路径为public
          offset: 3000, //列表滚动1000px才显示回到顶部按钮
          duration: this.topTime, // 页面回顶时间
          warpClass: "mescroll-totop", // 返回顶部按钮class名
          showClass: "mescroll-fade-in", // 返回顶部按钮进入class名
          hideClass: "mescroll-fade-out" // 返回顶部按钮隐藏class名
        },
        empty: {
          //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
          warpId: "xxid", //父布局的id (1.3.5版本支持传入dom元素)
          icon: "./static/mescroll/mescroll-empty.png", //图标,默认null,支持网络图
          tip: "暂无相关数据~" //提示
        },
        htmlLoading:
          '<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中…</p>',
        lazyLoad: {
          use: true, // 开启懒加载
          attr: "imgurl", // 网络图的自定义属性名
          showClass: "", // 懒加载图片展示方式
          // mescroll-lazy-in
          delay: 50, // 延时时间
          offset: 50 // 滑动时离底部多少距离才开始展示图片
        },
        noMoreSize: this.noMore,
        page: {
          size: this.pageSize
        },

        onScroll: this.onScroll
      },
      mescrollTop: 0
    };
  },
  methods: {
    // mescroll组件初始化的回调,可获取到mescroll对象
    init(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback(page, mescroll) {
      this.$emit("getData");
    },
    downCallback(page, mescroll) {
      if (this.warpId !== "chat-wrap") {
        this.$parent.page.page = 1;
      }
      this.$parent.page.pageSize = 10;
      // 下拉刷新不至于太快
      let timer = setTimeout(() => {
        this.$emit("getData");
        clearTimeout(timer);
      }, 500);
    },
    // 获取记录的滚动位置
    getTop() {
      return this.mescroll && this.mescroll.getScrollTop();
    },
    // 记录位置
    scrollTo(y, t) {
      this.mescroll && this.mescroll.scrollTo(y, t);
    },
    onScroll(mescroll, y, isUp) {
      this.$emit("onScroll", y);
    }
  }
};
</script>
			
<style scoped lang='less'>
/*通过fixed固定mescroll的高度*/
#mescroll-wrap {
  & .mescroll {
    position: fixed;
    top: 49px;
    bottom: 49px;
    height: auto;
  }
}
</style>