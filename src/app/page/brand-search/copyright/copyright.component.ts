import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';
import {default as COPYRIGHT, Copyright} from './copyright';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {
  page = 1;
  copyrights: Copyright[] = COPYRIGHT;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
  }

  selectZx(sel) {
    this.commonService.special = sel;
  }
}
