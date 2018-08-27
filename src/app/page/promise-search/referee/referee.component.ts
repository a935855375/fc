import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';
import {default as REFEREE, Referee} from './referee';

@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.scss']
})
export class RefereeComponent implements OnInit {
  page = 1;
  referees: Referee[] = REFEREE;
  searchContent = localStorage.getItem('promiseSearch');

  /*搜索的关键字*/

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
  }

  selectZx(sel) {
    this.commonService.promise = sel;
  }

}
