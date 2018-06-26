import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  kind = 0;
  holder = '请输入企业名称、人名，产品名等，多关键词用空格隔开，如“小米 雷军';
  key: string;

  k=0;
  provinces:string[]=['河北','山西','辽宁','吉林','黑龙江','江苏','浙江','安徽','福建','江西','山东','河南','湖北'
    ,'湖南','广东','海南','四川','贵州','云南','陕西','甘肃','青海','台湾'];

  constructor(private router: Router) {

  }

  search() {
    this.router.navigate(['/search'], {queryParams: {key: this.key, kind: this.kind}});
  }

  keyChanged(event) {
    this.key = event;
  }

  changeKind(kind) {
    this.kind = kind;
    switch (kind) {
      case 0:
        this.holder = '请输入企业名称、人名，产品名等，多关键词用空格隔开，如“小米 雷军';
        break;
      case 1:
        this.holder = '请输入企业名称、注册号或统一社会信用代码，如“小米科技”';
        break;
      case 2:
        this.holder = '请输入法人名称或股东名称，如“马云”';
        break;
      case 3:
        this.holder = '请输入高管名称，如“李嘉诚”';
        break;
      case 4:
        this.holder = '请输入品牌或产品的关键字，如“企信通”';
        break;
      case 5:
        this.holder = '请输入企业注册地址、联系电话、邮箱或网址，如“苏州工业园区”';
        break;
      case 6:
        this.holder = '请输入企业经营范围，如“软件”';
        break;
    }
  }
}
