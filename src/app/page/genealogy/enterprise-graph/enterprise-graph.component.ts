import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-enterprise-graph',
  templateUrl: './enterprise-graph.component.html',
  styleUrls: ['./enterprise-graph.component.scss']
})
export class EnterpriseGraphComponent implements OnInit {
  mInstance: any;
  flag = false;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.getEnterpriseGraphById(1).then(x => {
      this.options.series[0].data = [x as any];
      this.flag = true;
    });
  }

  init(c) {
    this.mInstance = c;
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

        initialTreeDepth: 3,

        animationDurationUpdate: 750

      }
    ]
  };

}
