<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import MainTabbar from "@/components/content/mainTabbar/MainTabbar";

@Component({
  name: "App",
  components: { MainTabbar }
})
export default class App extends Vue {}
</script>

<style lang="less">
@import "assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>
