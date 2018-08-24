import {Component, OnInit} from '@angular/core';
import {PageScrollConfig} from 'ngx-page-scroll';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-operating-condition',
  templateUrl: './operating-condition.component.html',
  styleUrls: ['../basic-info/basic-info.component.scss']
})
export class OperatingConditionComponent implements OnInit {
  page = 1;
  d: any;
  num: any[] = [];

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    PageScrollConfig.defaultScrollOffset = 70;
    PageScrollConfig.defaultDuration = 500;
    this.commonService.getOperatingConditions(32).then(x => {
      this.d = x;
      for (let i = 0; i < 3; i++) {
        this.num[i] = Math.floor(Math.random() * (90 - 1 + 1) + 10);
      }
    });
  }

}
