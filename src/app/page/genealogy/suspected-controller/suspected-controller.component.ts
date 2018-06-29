import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-suspected-controller',
  templateUrl: './suspected-controller.component.html',
  styleUrls: ['./suspected-controller.component.scss']
})
export class SuspectedControllerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
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
    series: [
      {
        type: 'graph',
        layout: 'force',
        circular: {
          rotateLabel: false,
        },
        symbolSize: (value, params) => {
          //根据数据params中的data来判定数据大小
          switch (params.data.category) {
            case 0:
              return 50;
            case 1:
              return 50;
            case 2:
              return 20;
            default:
              return 60;
          }
        },
        focusNodeAdjacency: true,
        roam: true,
        categories: [{
          name: '朋友',
          itemStyle: {
            normal: {
              color: '#009800',
            }
          }
        }, {
          name: '战友',
          itemStyle: {
            normal: {
              color: '#4592FF',
            }
          }
        }, {
          name: '亲戚',
          itemStyle: {
            normal: {
              color: '#3592F',
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
        force: {
          repulsion: 15000
        },
        edgeSymbol: ['none', 'arrow'],
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
          name: '小米科技有限责任公司',
          draggable: true,
        }, {
          name: '雷军',
          category: 1,
          draggable: true,
        },],
        links: [{
          source: 1,
          target: 0,
          value: '77.8%'
        }],
        lineStyle: {
          normal: {
            opacity: 0.9,
            width: 1,
            curveness: 0
          }
        }
      }
    ]
  };
}
