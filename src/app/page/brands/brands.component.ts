import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../service/common.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  kind = 0;
  holder = '请输入商标名称、注册号或申请人名称';
  title = '商标';

  constructor(private commonService: CommonService) {
    this.changeKind(this.commonService.special);
  }

  ngOnInit() {
  }

  changeKind(kind) {
    this.kind = kind;
    switch (kind) {
      case 0:
        this.holder = '请输入商标名称、注册号或申请人名称';
        this.title = '商标';
        break;
      case 1:
        this.holder = '请输入专利名称、申请号或申请人名称';
        this.title = '专利';
        break;
      case 2:
        this.holder = '请输入作品名称、登记号或著作权人名称';
        this.title = '著作权';
        break;
      case 3:
        this.holder = '请输入软件简称、登记号或软件著作权人';
        this.title = '软件著作权';
        break;
    }
  }

}
