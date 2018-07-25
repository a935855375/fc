import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-patent-info',
  templateUrl: './patent-info.component.html',
  styleUrls: ['./patent-info.component.scss']
})
export class PatentInfoComponent implements OnInit {

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
  }

  selectZx(sel) {
    this.commonService.special = sel;
  }

}
