import { Vue, Component } from 'vue-property-decorator';
import Navbar from '@/components/common/navbar/Navbar';
import './css/homeNavbar.less';

@Component
class HomeNavbar extends Vue {
  public render() {
    return (
      <div class='home-navbar'>
        <Navbar>
          <span slot='center'>购物街</span>
        </Navbar>
      </div>
    );
  }
}

export default HomeNavbar;

