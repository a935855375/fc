import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-executed-info',
  templateUrl: './executed-info.component.html',
  styleUrls: ['./executed-info.component.scss']
})
export class ExecutedInfoComponent implements OnInit {

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
  }

  selectZx(sel) {
    this.commonService.promise = sel;
  }
}
