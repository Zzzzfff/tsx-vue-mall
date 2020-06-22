import { Vue, Component, Prop } from 'vue-property-decorator';
import { Goods } from '@/api/detail';
import './css/detailBaseInfo.less';

@Component({
  name: 'DetailBaseInfo',
})
class DetailBaseInfo extends Vue {
  @Prop(Object) private goods: any;

  public render() {
    return (
      <div class='detail-base-info'>
        <div class='base-info'>
          <div class='info-title'>{this.goods.title}</div>
          <div class='info-price'>
            <span class='n-price'>{this.goods.newPrice}</span>
            <span class='o-price'>{this.goods.oldPrice}</span>
            <span class='discount'>{this.goods.discount ? this.goods.discount : ''}</span>
          </div>
          <div class='info-other'>
            <span>{this.goods.columns ? this.goods.columns[0] : ''}</span>
            <span>{this.goods.columns ? this.goods.columns[1] : ''}</span>
            <span>{this.goods.services ? this.goods.services[this.goods.services.length - 1].name : ''}</span>
          </div>
          <div>

          </div>
        </div>
      </div>
    );
  }
}

export default DetailBaseInfo;

















