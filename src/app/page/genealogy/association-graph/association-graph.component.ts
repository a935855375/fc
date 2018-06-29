import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-association-graph',
  templateUrl: './association-graph.component.html',
  styleUrls: ['./association-graph.component.scss']
})
export class AssociationGraphComponent implements OnInit {
  flag = false;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.getAssociationGraphById(localStorage.getItem('cid')).then(x => {
      this.options.series[0].data = (x as any).data;
      this.options.series[0].links = (x as any).links;
      this.flag = true;
    });
  }

  options = {
    title: {
      text: ''
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
      normal: {
        show: true,
        textStyle: {
          fontSize: 12
        },
      }
    },
    legend: {
      x: 'center',
      show: false,
      data: ['朋友', '战友', '亲戚']
    },
    series: [{
      type: 'graph',
      layout: 'force',
      symbolSize: 45,
      focusNodeAdjacency: true,
      roam: true,
      categories: [{
        name: '法定代表人',
        itemStyle: {
          normal: {
            color: '#5da0ee',
          }
        }
      }, {
        name: '人物',
        itemStyle: {
          normal: {
            color: '#f5415e',
          }
        }
      }, {
        name: '目标',
        itemStyle: {
          normal: {
            color: '#e28f12',
          }
        }
      }],
      label: {
        normal: {
          show: true,
          textStyle: {
            fontSize: 12
          },
        }
      },
      edgeSymbol: ['none', 'arrow'],
      force: {
        repulsion: 1500
      },
      edgeLabel: {
        normal: {
          show: true,
          textStyle: {
            fontSize: 10
          },
          formatter: '{c}'
        }
      },
      data: [{
        name: '徐贱云',
        category: 0,
        draggable: true,
      }, {
        name: '冯可梁',
        category: 1,
        draggable: true,
      }, {
        name: '邓志荣',
        category: 1,
        draggable: true,
      }, {
        name: '李荣庆',
        category: 1,
        draggable: true,
      }, {
        name: '郑志勇',
        category: 1,
        draggable: true,
      }, {
        name: '赵英杰',
        category: 1,
        draggable: true,
      }, {
        name: '王承军',
        category: 1,
        draggable: true,
      }, {
        name: '陈卫东',
        category: 1,
        draggable: true,
      }, {
        name: '邹劲松',
        category: 1,
        draggable: true,
      }, {
        name: '赵成',
        category: 1,
        draggable: true,
      }, {
        name: '陈现忠',
        category: 1,
        draggable: true,
      }, {
        name: '陶泳',
        category: 1,
        draggable: true,
      }, {
        name: '王德福',
        category: 1,
        draggable: true,
      }],
      links: [{
        source: 0,
        target: 2,
        value: '战友'
      }, {
        source: 0,
        target: 3,
        value: '房东'
      }, {
        source: 0,
        target: 4,
        value: '朋友'
      }, {
        source: 1,
        target: 2,
        value: '表亲'
      }, {
        source: 0,
        target: 5,
        value: '朋友'
      }, {
        source: 4,
        target: 5,
        value: '姑姑'
      }, {
        source: 2,
        target: 8,
        value: '叔叔'
      }, {
        source: 0,
        target: 12,
        value: '朋友'
      }, {
        source: 6,
        target: 11,
        value: '爱人'
      }, {
        source: 6,
        target: 3,
        value: '朋友'
      }, {
        source: 7,
        target: 5,
        value: '朋友'
      }, {
        source: 9,
        target: 10,
        value: '朋友'
      }, {
        source: 3,
        target: 10,
        value: '朋友'
      }, {
        source: 2,
        target: 11,
        value: '同学'
      }, {
        source: 0,
        target: 1,
        category: 0,
        value: '同学'
      }],
      lineStyle: {
        normal: {
          opacity: 0.9,
          width: 1,
          curveness: 0
        }
      },
    }]
  };

}
