import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-investment-graph',
  templateUrl: './investment-graph.component.html',
  styleUrls: ['./investment-graph.component.scss']
})
export class InvestmentGraphComponent implements OnInit {
  flag: boolean = false;
  dataset;

  constructor(private commonService: CommonService) {
  }

  width: number;
  height: number;

  ngOnInit() {
    this.width = window.innerWidth;
    this.height = window.innerHeight - 62;

    this.commonService.getPersonalGraphById(localStorage.getItem('cid'), 3).then((x: any) => {
      this.dataset = x.Result.Node;
      this.flag = true;
    });

  }

}
