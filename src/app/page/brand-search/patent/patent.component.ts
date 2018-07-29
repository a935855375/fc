import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';
import {default as PATENT, Patent} from './patent';

@Component({
  selector: 'app-patent',
  templateUrl: './patent.component.html',
  styleUrls: ['./patent.component.scss']
})
export class PatentComponent implements OnInit {
  page = 1;
  patents: Patent[] = PATENT;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
  }

  selectZx(sel) {
    this.commonService.special = sel;
  }
}
