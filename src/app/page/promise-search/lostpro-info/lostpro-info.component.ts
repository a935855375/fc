import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-lostpro-info',
  templateUrl: './lostpro-info.component.html',
  styleUrls: ['./lostpro-info.component.scss']
})
export class LostproInfoComponent implements OnInit {
  d: any;
  searchContent = localStorage.getItem('promiseSearch');

  /*搜索的关键字*/

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.getLostProInfo(localStorage.getItem('promiseId')).then((x: any) => {
      this.d = x;
    });
  }

}
