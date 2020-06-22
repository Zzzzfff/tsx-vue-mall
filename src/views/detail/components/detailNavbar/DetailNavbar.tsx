import { Vue, Component } from 'vue-property-decorator';
import Navbar from '@/components/common/navbar/Navbar';
import './css/detailNavbar.less';
import img from '@/assets/images/common/back.svg';

@Component({
  name: 'DetailNavbar',
  components: {
    Navbar,
  },
})
class DetailNavbar extends Vue {
  public currentIndx: number = 0;
  private titles: any[] = ['商品', '参数', '评论', '推荐'];

  public render() {
    return (
      <div class='detail-navbar'>
        <Navbar>
          <img slot='left' src={img} onClick={this.back}></img>
          <span slot='center'>
            <div class='title'>
              {this.titles.map((title, index) => {
                return (<span class={this.currentIndx === index ? 'active' : ''}
                  onClick={this.navClick.bind(this, index)}>
                  {title}</span>);
              })}
            </div>
          </span>
        </Navbar>
      </div>
    );
  }
  private navClick(index: number): void {
    this.currentIndx = index;
  }
  private back(): void {
    this.$router.back();
  }
}

export default DetailNavbar;
