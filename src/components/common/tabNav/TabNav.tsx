import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import './css/tabNav.less';

@Component({
  name: 'TabNav',
})
export default class TabNav extends Vue {
  public currentIndex: number = 0;
  @Prop(Array) private names!: [];

  @Emit('navClick')
  private navClick(index: number) {
    this.currentIndex = index;
    // 向父组件传参
    return index;
  }

  private render(h) {
    return (
      <div class='tab-nav'>
        {this.names.map((name, index) => {
          return (
            <div class='tab-nav-item' onClick={this.navClick.bind(this, index)} >
              <span class={this.currentIndex === index ? 'acitve' : ''}>{name}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
