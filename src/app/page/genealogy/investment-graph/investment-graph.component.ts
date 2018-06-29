import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-investment-graph',
  templateUrl: './investment-graph.component.html',
  styleUrls: ['./investment-graph.component.scss']
})
export class InvestmentGraphComponent implements OnInit {
  flag = false;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.getInvestmentGraphById(localStorage.getItem('cid')).then(x => {
      this.options.series[0].data = [x as any];
      console.log(x);
      this.flag = true;
    });
  }

  options = {

    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [
      {
        type: 'tree',

        roam: true,

        data: [],

        top: '20%',
        bottom: '20%',

        layout: 'radial',

        symbol: 'emptyCircle',

        symbolSize: 7,

        initialTreeDepth: 2,

        animationDurationUpdate: 750

      }
    ]
  };
}
