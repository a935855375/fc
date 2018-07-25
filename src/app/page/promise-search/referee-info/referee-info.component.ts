import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-referee-info',
  templateUrl: './referee-info.component.html',
  styleUrls: ['./referee-info.component.scss']
})
export class RefereeInfoComponent implements OnInit {

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
  }

  selectZx(sel) {
    this.commonService.promise = sel;
  }

}
