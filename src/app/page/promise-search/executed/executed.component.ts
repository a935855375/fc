import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-executed',
  templateUrl: './executed.component.html',
  styleUrls: ['./executed.component.scss']
})
export class ExecutedComponent implements OnInit {
  page = 1;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
  }

  selectZx(sel) {
    this.commonService.promise = sel;
  }
}
