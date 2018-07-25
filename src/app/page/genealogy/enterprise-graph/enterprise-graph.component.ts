import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-enterprise-graph',
  templateUrl: './enterprise-graph.component.html',
  styleUrls: ['./enterprise-graph.component.scss']
})
export class EnterpriseGraphComponent implements OnInit {
  flag: boolean = false;
  dataset;

  constructor(private commonService: CommonService) {
  }

  width: number;
  height: number;

  ngOnInit() {
    this.width = window.innerWidth;
    this.height = window.innerHeight - 62;

    this.commonService.getEnterpriseGraphById(localStorage.getItem('cid')).then(x => {
      this.dataset = x;
      this.flag = true;
    });
  }

}
