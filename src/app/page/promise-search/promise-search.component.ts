import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../service/common.service';

@Component({
  selector: 'app-promise-search',
  templateUrl: './promise-search.component.html',
  styleUrls: ['./promise-search.component.scss']
})
export class PromiseSearchComponent implements OnInit {
  page = 1;
  kind = 0;

  constructor(private commonService: CommonService) {
    this.kind = this.commonService.spitem1;
  }

  ngOnInit() {
  }

  selectPromise(sel) {
    this.kind = sel;
  }

  changeSpItem(sel) {
    this.commonService.spitem2 = sel;
  }
}
