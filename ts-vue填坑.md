#### 1 tabbar中具名插槽
1. render函数创建插槽 this.$slots.name1 ，例子TabbarItem
<!-- <slot name='name1'></slot> -->

2. 填补插槽，，例子Tabbar
<!-- <span slot='name1'>xxx</span> -->

#### 2 在src目录下为import的图片添加声明文件imgs.d.ts

#### 3 tsx的render函数给子组件传值用props属性

#### 4 tsx的render函数中绑定带有参数的onClick事件 .bind(this, xxx)

#### 5 less中引入背景图片 backround: ~'url('xxx.png')'，GoodsInfo.vue

#### 6 typescript 不能直接定义全局变量的问题，npm i -S vue-bus-ts，解决事件总线

#### 7 typescript解决this问题，"this" 隐式具有类型 "any"，因为它没有类型注释。 utils.ts

#### 8 mescroll 返回顶部按钮的图片放在public静态文件夹下，按钮的css放在全局样式的base.css中

#### 9 mescroll 页面切换保持原来页面状态 通过监听滚动获取y，Home.vue

#### 10 vue-property-decorator中@Emit向父组件传参 TabNav.tsx

#### 11 render函数中引入图片路径，需要先import引入 DetailNavbar.tsx