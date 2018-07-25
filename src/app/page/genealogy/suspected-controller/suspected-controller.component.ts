import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-suspected-controller',
  templateUrl: './suspected-controller.component.html',
  styleUrls: ['./suspected-controller.component.scss']
})
export class SuspectedControllerComponent implements OnInit {
  flag = false;
  title;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    /*this.commonService.getSuspectedControllerById(localStorage.getItem('cid')).then(x => {
      this.options.series[0].data[0].name = localStorage.getItem('name');
      this.options.series[0].data[1].name = (x as any).name;
      this.options.series[0].links[0].value = (x as any).shareholding_ratio + '%';
      this.title = '疑似实际控制人为：' + '<em class="mr-4">' + (x as any).name + '</em>' +
        '总股权占比例为：' + '<em>' + (x as any).shareholding_ratio + '%' + '</em>';
      this.flag = true;
    });*/
  }

  options = {
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
