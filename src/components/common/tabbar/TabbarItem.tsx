import { Vue, Component, Prop } from 'vue-property-decorator';
import './css/tabbarItem.less';

@Component({
  name: 'TabbarItem',
})

class TabbarItem extends Vue {

  @Prop(String) private path!: string;
  @Prop(String) private fontColor: string | undefined;

  private get isActive(): boolean {
    return this.$route.path.indexOf(this.path) !== -1;
  }

  private get getFontColor(): string {
    const color = this.fontColor ? this.fontColor : '#000';
    return this.isActive ? color : '';
  }

  private tabClick(): void {
    this.$router.replace(this.path);
  }

  private render(h) {
    return (
      <div class='tabbar-item' onClick={this.tabClick}>
        <div>{!this.isActive ? this.$slots.itemIcon : ''}</div>
        <div>{this.isActive ? this.$slots.itemIconActive : ''}</div>
        <div style={{ color: this.getFontColor }}>{this.$slots.itemText}</div>
      </div>
    );

    // return h('div', { class: 'tabbar-item' }, [
    // 	!this.isActive ? this.$slots.itemIcon : '',
    // 	this.isActive ? this.$slots.itemIconActive : '',
    // 	this.$slots.itemText
    // ]);
  }
}

export default TabbarItem;
