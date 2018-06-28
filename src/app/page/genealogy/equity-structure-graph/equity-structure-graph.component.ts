import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-equity-structure-graph',
  templateUrl: './equity-structure-graph.component.html',
  styleUrls: ['./equity-structure-graph.component.scss']
})
export class EquityStructureGraphComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  data = [
    {
      name: '小米有限责任公司',
      value: 6,
      symbolSize: [130, 30],
      symbol: 'rectangle',
      itemStyle: {
        normal: {
          borderWidth: 2,
          borderColor: 'black'
        }
      },
      children: [
        {
          name: '股东',
          value: 6,
          symbolSize: [70, 30],
          symbol: 'rectangle',
          itemStyle: {
            normal: {
              borderWidth: 2,
              borderColor: 'black'
            }
          },
          children: [
            {
              name: '雷军',
              value: '77.8%',
              symbolSize: [70, 30],
              symbol: 'rectangle',
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'inside'
                  },
                  borderWidth: 2,
                  borderColor: 'black'
                }
              }
            },
            {
              name: '黎万强',
              value: '10.12%',
              symbolSize: [60, 30],
              symbol: 'rectangle',
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'inside'
                  },
                  borderWidth: 2,
                  borderColor: 'black'
                }
              },
            },
            {
              name: '洪峰',
              value: '10.07%',
              symbolSize: [60, 30],
              symbol: 'rectangle',
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'inside'
                  },
                  borderWidth: 2,
                  borderColor: 'black'
                }
              },
            },
            {
              name: '刘德',
              value: '2.01%',
              symbolSize: [60, 30],
              symbol: 'rectangle',
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'inside'
                  },
                  borderWidth: 2,
                  borderColor: 'black'
                }
              },
            },
          ]
        },
        {
          name: '对外投资',
          value: 6,
          symbolSize: [70, 30],
          symbol: 'rectangle',
          itemStyle: {
            normal: {
              borderWidth: 2,
              borderColor: 'black'
            }
          },
          children: [
            {
              name: '湖北小米长江产业基金合伙企业(有限合伙)',
              value: 6,
              symbolSize: [70, 30],
              symbol: 'rectangle',
              itemStyle: {
                normal: {
                  borderWidth: 2,
                  borderColor: 'black'
                }
              },
            },
            {
              name: '重庆小米商业保理有限公司',
              value: 6,
              symbolSize: [70, 30],
              symbol: 'rectangle',
              itemStyle: {
                normal: {
                  borderWidth: 2,
                  borderColor: 'black'
                }
              },
            },
            {
              name: '珠海小米金融科技有限公司',
              value: 6,
              symbolSize: [70, 30],
              symbol: 'rectangle',
              itemStyle: {
                normal: {
                  borderWidth: 2,
                  borderColor: 'black'
                }
              },
            },
            {
              name: '成都西米互动科技有限公司',
              value: 6,
              symbolSize: [70, 30],
              symbol: 'rectangle',
              itemStyle: {
                normal: {
                  borderWidth: 2,
                  borderColor: 'black'
                }
              },
            },
          ],
        },
      ]
    }
  ];


  options = {
    tooltip: {
      show: false,
      trigger: 'item',
      formatter: '{b}: {c}'
    },
    toolbox: {
      show: true,
      feature: {
        mark: {show: true},
        dataView: {show: true, readOnly: false},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    calculable: false,
    series: [
      {
        name: '股权结构图',
        type: 'tree',
        orient: 'horizontal',  // vertical horizontal
        rootLocation: {x: '50%', y: '10%'}, // 根节点位置  {x: 'center',y: 10}
        nodePadding: 20,
        layerPadding: 40,
        symbol: 'rectangle',
        borderColor: 'black',
        itemStyle: {
          normal: {
            color: '#fff',//节点背景色
            label: {
              show: true,
              position: 'inside',
              textStyle: {
                color: 'black',
                fontSize: 15,
                //fontWeight:  'bolder'
              }
            },
            lineStyle: {
              color: '#000',
              width: 1,
              type: 'broken' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
            }
          },
          emphasis: {
            label: {
              show: false
            }
          }
        },
        data: this.data,
      }
    ]
  };
}
