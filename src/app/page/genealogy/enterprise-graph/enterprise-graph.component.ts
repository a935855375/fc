import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-enterprise-graph',
  templateUrl: './enterprise-graph.component.html',
  styleUrls: ['./enterprise-graph.component.scss']
})
export class EnterpriseGraphComponent implements OnInit {
  flag = false;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.getEnterpriseGraphById(localStorage.getItem('cid')).then(x => {
      this.options.series[0].data = [x as any];
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

        symbol: 'circle',

        symbolSize: 7,

        initialTreeDepth: 3,

        animationDurationUpdate: 750,

        itemStyle: {
          normal: {
            color: '#4bec56',
          },
          emphasis: {
            color: '#4bec56',
          },
          borderColor: {
            color: '#4bec56',
          },
          borderType: 'dashed'
        },

      }
    ]
  };

}
