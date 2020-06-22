import { Component, Vue } from 'vue-property-decorator';
import './css/tabbar.less';

@Component({
  name: 'Tabbar',
})

export default class Tabbar extends Vue {
  public render(h) {
    // <div><slot></slot></div>
    return h('div', { class: 'tabbar' }, this.$slots.default);
  }
}
