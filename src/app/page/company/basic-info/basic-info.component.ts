import {Component, OnInit} from '@angular/core';
import {PageScrollConfig} from 'ngx-page-scroll';
import {CompanyService} from '../../../service/company.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PERSONDATA} from './person';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  d: any;
  title: string;
  data2:any=PERSONDATA;

  constructor(private companyService: CompanyService,
              private modalService: NgbModal) {
  }

  rangeArray = (start, end) =>
    Array(end - start + 1)
      .fill(0)
      .map((v, i) => i + start)
      .filter(x => x % 2 == 0);

  ngOnInit() {
    PageScrollConfig.defaultScrollOffset = 70;
    PageScrollConfig.defaultDuration = 500;

    this.companyService.getBasicInfo(this.companyService.cid).then(x => {
      this.d = x;
      this.title = (x as any).company.name;
      localStorage.setItem('name', this.title);
      this.companyService.getSubject().next((x as any).company);
    });
  }

  openLg(content) {
    this.modalService.open(content, {size: 'lg'});
  }


  data = [{
    name: '北京',
    value: 5.3
  },
    {
      name: '天津',
      value: 3.8
    },
    {
      name: '上海',
      value: 4.6
    },
    {
      name: '重庆',
      value: 3.6
    },
    {
      name: '河北',
      value: 3.4
    },
    {
      name: '河南',
      value: 3.2
    },
    {
      name: '云南',
      value: 1.6
    },
    {
      name: '辽宁',
      value: 4.3
    },
    {
      name: '黑龙江',
      value: 4.1
    },
    {
      name: '湖南',
      value: 2.4
    },
    {
      name: '安徽',
      value: 3.3
    },
    {
      name: '山东',
      value: 3.0
    },
    {
      name: '新疆',
      value: 1
    },
    {
      name: '江苏',
      value: 3.9
    },
    {
      name: '浙江',
      value: 3.5
    },
    {
      name: '江西',
      value: 2.0
    },
    {
      name: '湖北',
      value: 2.1
    },
    {
      name: '广西',
      value: 3.0
    },
    {
      name: '甘肃',
      value: 1.2
    },
    {
      name: '山西',
      value: 3.2
    },
    {
      name: '内蒙古',
      value: 3.5
    },
    {
      name: '陕西',
      value: 2.5
    },
    {
      name: '吉林',
      value: 4.5
    },
    {
      name: '福建',
      value: 2.8
    },
    {
      name: '贵州',
      value: 1.8
    },
    {
      name: '广东',
      value: 3.7
    },
    {
      name: '青海',
      value: 0.6
    },
    {
      name: '西藏',
      value: 0.4
    },
    {
      name: '四川',
      value: 3.3
    },
    {
      name: '宁夏',
      value: 0.8
    },
    {
      name: '海南',
      value: 1.9
    },
    {
      name: '台湾',
      value: 0.1
    },
    {
      name: '香港',
      value: 0.1
    },
    {
      name: '澳门',
      value: 0.1
    }
  ];

  chartOption = {
    title: {
      text: '企业对外投资区域分布图',
      textStyle: {
        fontSize: 13,
      },
      x: 'left'
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
    tooltip: {
      show: true,
      formatter: function (params) {
        return params.name + '：' + params.data['value'] + '%';
      },
    },
    visualMap: {
      type: 'continuous',
      text: ['高', '低'],
      showLabel: true,
      seriesIndex: [0],
      calculable: true,
      min: 0,
      max: 7,
      inRange: {
        color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096',]
      },
      textStyle: {
        color: '#000'
      },
      bottom: 30,
    },
    geo: {
      roam: false,
      map: 'china',
      layoutSize: '80%',
      label: {
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        emphasis: {
          areaColor: '#fff464'
        }
      },

    },
    series: [{
      name: 'mapSer',
      type: 'map',
      roam: false,
      geoIndex: 0,
      label: {
        show: false,
      },
      data: this.data,
    }]
  };

  options = {
    grid: {
      top: 100,
      right: 20,
      bottom: 75,
      left: 75,
      backgroundColor: '#fbfbfb'
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
    title: {
      text: '企业对外投资行业前五分布图',
      textStyle: {
        fontSize: 13,
      },
      x: 'left'
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        rotate: 20
      },
      splitLine: {
        show: false
      },
      data: ['批发和零售业', '金融业', '租赁和商务服务业', '信息传输、软件和信息技术服务业', '科学研究和技术服务业']
    },
    yAxis: {
      axisLine: {
        show: true
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#dbdbdb',
          width: 0.5
        }
      },
      axisTick: {
        show: true
      }
    },
    series: [{
      data: [1, 1, 3, 4, 5],
      type: 'bar',
      barMaxWidth: 40,
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      },
      itemStyle: {
        normal: {
          color: '#72adf4',
        }
      },
    }]
  };

  option1 = {
    'tooltip': {
      'formatter': function (param) {
        if (param.dataType === 'edge') {
          return param.data.category + ': ' + param.data.target;
        }
        return param.data.category + ': ' + param.data.name;
      }
    },
    'title': {
      'text': ''
    },
    'legend': [{
      'data': ['自然人股东', '企业股东', '大股东'],
      left:'left'
    }],
    'series': [{
      'top': 0,
      'label': {
        'normal': {
          'show': true,
          'position': 'inside',
          'textStyle': {
            'fontSize': 16
          }
        }
      },
      'roam': true,
      'edgeLabel': {
        'normal': {
          'show': true,
          'formatter': function (param) {
            return param.data.category;
          },
          'textStyle': {
            'fontSize': 16
          }
        }
      },
      'bottom': 0,
      'data': [{
        'name': '小米科技有限责任公司',
        'draggable': true,
        'category': '公司名称'
      }, {
        'name': '黎万强 \n股权比例:10.12% 认缴金额:18724.3569万元',
        'draggable': true,
        'symbolSize': [350, 45],
        'category': '自然人股东'
      }, {
        'name': '洪锋 \n股权比例:10.07% 认缴金额:18623.099万元',
        'draggable': true,
        'symbolSize': [350, 45],
        'category': '自然人股东'
      }, {
        'name': '刘德 \n股权比例:2.01% 认缴金额:3718.4963万元',
        'draggable': true,
        'symbolSize': [350, 45],
        'category': '自然人股东'
      }, {
        'name': '雷军 \n股权比例:10.07% 认缴金额:143934.0478万元',
        'draggable': true,
        'symbolSize': [350, 45],
        'category': '大股东'
      }],
      'categories': [{
        'name': '公司名称'
      }, {
        'name': '自然人股东'
      }, {
        'name': '企业股东'
      }, {
        'name': '大股东'
      }],
      'type': 'graph',
      'focusNodeAdjacency': true,
      'force': {
        'repulsion': 1000,
        'edgeLength': [150, 300]
      },
      'layout': 'force',
      'symbolSize': [240, 30],
      'links': [{
        'target': '黎万强 \n股权比例:10.12% 认缴金额:18724.3569万元',
        'source': '小米科技有限责任公司',
        'category': '自然人股东'
      }, {
        'target': '洪锋 \n股权比例:10.07% 认缴金额:18623.099万元',
        'source': '小米科技有限责任公司',
        'category': '自然人股东'
      }, {
        'target': '刘德 \n股权比例:2.01% 认缴金额:3718.4963万元',
        'source': '小米科技有限责任公司',
        'category': '自然人股东'
      }, {
        'target': '雷军 \n股权比例:10.07% 认缴金额:143934.0478万元',
        'source': '小米科技有限责任公司',
        'category': '大股东'
      }],
      'symbol': 'path://M19.300,3.300 L253.300,3.300 C262.136,3.300 269.300,10.463 269.300,19.300 L269.300,21.300 C269.300,30.137 262.136,37.300 253.300,37.300 L19.300,37.300 C10.463,37.300 3.300,30.137 3.300,21.300 L3.300,19.300 C3.300,10.463 10.463,3.300 19.300,3.300 Z',
      'lineStyle': {
        'normal': {
          'opacity': 0.9,
          'width': 1,
          'curveness': 0.1
        }
      }
    }],
    'animationEasingUpdate': 'quinticInOut',
    'animationDurationUpdate': 1500
  };



  option2 = {

    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [
      {
        type: 'tree',

        roam: true,

        data: this.data2,

        top: '20%',
        bottom: '20%',

        layout: 'radial',

        symbol: 'circle',

        symbolSize: 7,

        initialTreeDepth: 3,

        animationDurationUpdate: 750,

       /* itemStyle: {

          normal: {
            label: {
              show:true,
              textStyle: {
                fontSize: 14,
                fontWeight: "bolder",
                color: '#3FA7DC'
              },
            },
            lineStyle: {

              type: 'dash',
              color: '#333 ',
              width: 2,
            },
            color:'#ffd700',

          },// for legend

          emphasis: { label: { show:true} }

        },*/
        itemStyle: {
          normal: {
            color: '#ffd700',
          },
          emphasis: {
            color: '#ffd700',
          },
          borderColor: {
            color: '#ffd700',
          },
          borderType: 'dashed'
        },

      }
    ]
  };
}
