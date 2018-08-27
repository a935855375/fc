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
  searchContent = localStorage.getItem('promiseSearch');

  constructor(private commonService: CommonService) {
    this.kind = this.commonService.promise;
  }

  ngOnInit() {
  }

  selectPromise(sel) {
    this.kind = sel;
  }

  changeSpItem(sel) {
    this.commonService.special = sel;
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.selPromise();
    }
  }

  selPromise() {
    this.commonService.subjectPromise.next(this.searchContent);
  }
}
