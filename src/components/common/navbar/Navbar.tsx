import { Vue, Component } from 'vue-property-decorator';
import './css/navbar.less';

@Component
class Navbar extends Vue {
  public render() {
    return (
      <div class='navbar'>
        <div class='left'>{this.$slots.left}</div>
        <div class='center'>{this.$slots.center}</div>
        <div class='right'>{this.$slots.right}</div>
      </div>
    );
  }
}

export default Navbar;
