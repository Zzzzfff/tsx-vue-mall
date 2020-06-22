import { Component, Vue } from 'vue-property-decorator';
import Tabbar from '@/components/common/tabbar/Tabbar';
import TabbarItem from '@/components/common/tabbar/TabbarItem';
import './css/mainTabbar.less';

import homeImgPath from '@/assets/images/tabbar/home.svg';
import homeActiveImgPath from '@/assets/images/tabbar/home_active.svg';

import categoryImgPath from '@/assets/images/tabbar/category.svg';
import categoryActiveImgPath from '@/assets/images/tabbar/category_active.svg';

import shopcartImgPath from '@/assets/images/tabbar/shopcart.svg';
import shopcartActiveImgPath from '@/assets/images/tabbar/shopcart_active.svg';

import profileImgPath from '@/assets/images/tabbar/profile.svg';
import profileActiveImgPath from '@/assets/images/tabbar/profile_active.svg';

@Component({
  name: 'MainTabbar',
  components: {
    Tabbar,
    TabbarItem,
  },
})

class MainTabbar extends Vue {

  public render() {
    return (
      <div class='main-tabbar'>
        <tabbar>
          <tabbar-item path='/home' fontColor='#ff8198'>
            <img src={homeImgPath} alt='' slot='itemIcon' />
            <img src={homeActiveImgPath} alt='' slot='itemIconActive' />
            <span slot='itemText'>首页</span>
          </tabbar-item>
          <tabbar-item path='/category' fontColor='#ff8198'>
            <img src={categoryImgPath} alt='' slot='itemIcon' />
            <img src={categoryActiveImgPath} alt='' slot='itemIconActive' />
            <span slot='itemText'>分类</span>
          </tabbar-item>
          <tabbar-item path='/shopcart' fontColor='#ff8198'>
            <img src={shopcartImgPath} alt='' slot='itemIcon' />
            <img src={shopcartActiveImgPath} alt='' slot='itemIconActive' />
            <span slot='itemText'>购物车</span>
          </tabbar-item>
          <tabbar-item path='/profile' fontColor='#ff8198'>
            <img src={profileImgPath} alt='' slot='itemIcon' />
            <img src={profileActiveImgPath} alt='' slot='itemIconActive' />
            <span slot='itemText'>我的</span>
          </tabbar-item>
        </tabbar>
      </div>
    );
  }
}

export default MainTabbar;
