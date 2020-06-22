<template>
  <div class="detailcommentinfo" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment">
      <div class="comment_pj">用户评价</div>
      <div class="comment_gd">更多</div>
    </div>
    <div class="comment_name">
      <div class="user_img">
        <img :src="commentInfo.avatar" alt />
      </div>
      <div class="user_name">{{commentInfo.uname}}</div>
    </div>
    <div class="comment_content">
      <div class="content">{{commentInfo.content}}</div>
      <div class="other">
        <div class="time">{{commentInfo.created | showDate}}</div>
        <div class="desc">{{commentInfo.style}}</div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { formatDate } from "../../../../common/utils";

@Component({
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  }
})
export default class DetailCommentInfo extends Vue {
  @Prop(Object) public commentInfo!: any;
}
</script>

<style scoped lang="less">
.detailcommentinfo {
  padding: 10px 15px 0;
  border-top: 10px solid gray;
  margin-bottom: 20px;
}
.comment {
  display: flex;

  border-bottom: 1px solid #d2d2d2;
  height: 50px;
  line-height: 50px;
}
.comment_pj {
  flex: 0.9;
  font-size: 18px;
  font-weight: 550;
}
.comment_gd {
  font-weight: 550;
}
.comment_name {
  display: flex;
  align-items: center;
}
.user_img {
  margin-right: 10px;
}
.user_img img {
  width: 50px;
  height: 50px;
}
.content {
  margin-top: 10px;
}
.other {
  display: flex;
  margin-top: 10px;
  color: #d2d2d2;
}
.time {
  margin-right: 10px;
}
</style>