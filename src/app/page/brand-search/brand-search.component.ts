import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../service/common.service';

@Component({
  selector: 'app-brandsinfo',
  templateUrl: './brand-search.component.html',
  styleUrls: ['./brand-search.component.scss']
})
export class BrandSearchComponent implements OnInit {
  page = 1;
  kind = 0;
  title = '商标';

  constructor(private commonService: CommonService) {
    this.kind = this.commonService.spitem2;
  }

  ngOnInit() {
  }

  selectPromise(sel) {
    this.kind = sel;
    if (sel == 0)
      this.title = '商标';
    else if (sel == 1)
      this.title = '专利';
    else if (sel == 2)
      this.title = '著作权';
    else if (sel == 3)
      this.title = '软件著作权';
  }

  changeSpItem(sel) {
    this.commonService.spitem1 = sel;
  }
}