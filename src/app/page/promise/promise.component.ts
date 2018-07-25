import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../service/common.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  kind = 0;
  holder = '输入姓名/组织名';
  title = '失信人';

  constructor(private commonService: CommonService) {
    this.changeKind(this.commonService.promise);
  }

  ngOnInit() {
  }

  changeKind(kind) {
    this.kind = kind;
    switch (kind) {
      case 0:
        this.holder = '输入姓名/组织名';
        this.title = '失信人';
        break;
      case 1:
        this.holder = '输入姓名/组织名';
        this.title = '被执行人';
        break;
      case 2:
        this.holder = '请输入裁判文书名称';
        this.title = '裁判文书';
        break;
    }
  }
}
