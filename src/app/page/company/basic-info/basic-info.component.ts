import {Component, OnInit} from '@angular/core';
import {PageScrollConfig} from 'ngx-page-scroll';
import {CompanyService} from '../../../service/company.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  d: any;
  title: string;

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
      'data': ['自然人股东', '企业股东', '大股东']
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
        'name': '黎万强 \n股权比例:70% 缴纳金额:20万',
        'draggable': true,
        'symbolSize': [300, 40],
        /*"label": {
          "normal": {
            "textBorderWidth": 1,
            "textBorderColor": 'white',
          }
        },*/
        'category': '自然人股东'
      }, {
        'name': '洪峰',
        'draggable': true,
        'category': '自然人股东'
      }, {
        'name': '刘德',
        'draggable': true,
        'category': '自然人股东'
      }, {
        'name': '雷军',
        'draggable': true,
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
        'target': '黎万强 \n股权比例:70% 缴纳金额:20万',
        'source': '小米科技有限责任公司',
        'category': '自然人股东'
      }, {
        'target': '洪峰',
        'source': '小米科技有限责任公司',
        'category': '自然人股东'
      }, {
        'target': '刘德',
        'source': '小米科技有限责任公司',
        'category': '自然人股东'
      }, {
        'target': '雷军',
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

  data2 = [
    {
      "name": "小米科技有限责任公司",
      "children": [
        {
          "name": "对外投资",
          "children": [
            {
              "name": "湖北小米长江产业基金合伙企业(有限合伙)",
              "value": 0
            },
            {
              "name": "重庆小米商业保理有限公司",
              "value": 0
            },
            {
              "name": "珠海小米金融科技有限公司",
              "value": 0
            },
            {
              "name": "成都西米互动科技有限公司",
              "value": 0
            },
            {
              "name": "天津金星投资有限公司",
              "value": 0
            },
            {
              "name": "深圳英鹏互娱科技有限公司",
              "value": 0
            },
            {
              "name": "英鹏互娱科技(北京)有限公司",
              "value": 0
            },
            {
              "name": "北京创派力量科技有限公司",
              "value": 0
            },
            {
              "name": "西藏小米科技有限责任公司",
              "value": 0
            },
            {
              "name": "小米科技有限责任公司深圳分公司",
              "value": 0
            },
            {
              "name": "江苏紫米电子技术有限公司",
              "value": 0
            },
            {
              "name": "深圳英鹏信息技术股份有限公司",
              "value": 0
            },
            {
              "name": "上海迈外迪网络科技有限公司",
              "value": 0
            }
          ]
        },
        {
          "name": "高管",
          "children": [
            {
              "name": "雷军",
              "value": 0
            },
            {
              "name": "林斌",
              "value": 0
            },
            {
              "name": "刘芹",
              "value": 0
            },
            {
              "name": "许达来",
              "value": 0
            },
            {
              "name": "黎万强",
              "value": 0
            }
          ]
        },
        {
          "name": "裁判文书",
          "children": [
            {
              "name": "深圳市远威达科技有限公司\t",
              "value": 0
            },
            {
              "name": "深圳市龙华新区观澜中讯通手机店\t",
              "value": 0
            },
            {
              "name": "深圳市龙华新区龙华恒丰佳手机配件店\t",
              "value": 0
            },
            {
              "name": "宜昌市西陵区无限数码通讯器材经营部\t",
              "value": 0
            },
            {
              "name": "深圳市力升科技有限公司",
              "value": 0
            },
            {
              "name": "深圳市协美特科技有限公司\t",
              "value": 0
            },
            {
              "name": "深圳市神祺科技有限公司",
              "value": 0
            },
            {
              "name": "深圳市宝安区松岗涵祺五金电子加工厂\t",
              "value": 0
            },
            {
              "name": "深圳市宏达旺电子科技有限公司",
              "value": 0
            },
            {
              "name": "深圳市创研达科技有限公司\t",
              "value": 0
            },
            {
              "name": "深圳市强劲电池技术有限公司",
              "value": 0
            },
            {
              "name": "深圳市美斯邦微科技有限公司",
              "value": 0
            },
            {
              "name": "深圳市雅乐斯科技有限公司",
              "value": 0
            },
            {
              "name": "深圳市拓顶科技有限公司",
              "value": 0
            },
            {
              "name": "深圳市汪为电子科技有限公司",
              "value": 0
            },
            {
              "name": "深圳市坪蝶科技有限公司",
              "value": 0
            },
            {
              "name": "深圳市神兵科技有限公司",
              "value": 0
            },
            {
              "name": "深圳市欧歌电子有限公司",
              "value": 0
            },
            {
              "name": "惠州市惠城区创军通讯店",
              "value": 0
            },
            {
              "name": "博罗县石湾镇智润通通讯行\t",
              "value": 0
            },
            {
              "name": "深圳市环纪通电子有限公司\t",
              "value": 0
            },
            {
              "name": "深圳市优胜通电子有限公司\t",
              "value": 0
            },
            {
              "name": "深圳市源发科创吸塑制品有限公司",
              "value": 0
            },
            {
              "name": "深圳市大玺过控商务咨询服务有限公司\t",
              "value": 0
            },
            {
              "name": "深圳市恺文宋科技有限公司\t",
              "value": 0
            },
            {
              "name": "深圳市易路捷科技有限公司\t",
              "value": 0
            },
            {
              "name": "深圳市柏盈贸易有限公司",
              "value": 0
            },
            {
              "name": "深圳市章明数码科技有限公司",
              "value": 0
            },
            {
              "name": "深圳市朋客电子科技有限公司",
              "value": 0
            },
            {
              "name": "长沙市岳麓区恒仕日用品店\t",
              "value": 0
            },
            {
              "name": "长沙市岳麓区中南通讯器材商店",
              "value": 0
            }
          ]
        },
        {
          "name": "股东",
          "children": [
            {
              "name": "雷军",
              "value": 0
            },
            {
              "name": "黎万强",
              "value": 0
            },
            {
              "name": "洪锋",
              "value": 0
            },
            {
              "name": "刘德",
              "value": 0
            }
          ]
        },
        {
          "name": "法院公告",
          "children": [
            {
              "name": "深圳市龙华新区达克港电子商务商行",
              "value": 0
            },
            {
              "name": "北京晟煌科技有限公司",
              "value": 0
            },
            {
              "name": "深圳市盛航光电有限公司",
              "value": 0
            },
            {
              "name": "深圳市宝安区石岩音之烁电子厂",
              "value": 0
            },
            {
              "name": "深圳市宝安区龙华丰佳通讯店",
              "value": 0
            },
            {
              "name": "深圳市宝安区沙井友谊通讯店",
              "value": 0
            },
            {
              "name": "深圳千秋大业科技有限公司",
              "value": 0
            },
            {
              "name": "苏州昇兴通讯设备有限公司",
              "value": 0
            },
            {
              "name": "朔州市万通鼎盛商贸有限公司",
              "value": 0
            },
            {
              "name": "北京睿达亨通通讯器材有限公司",
              "value": 0
            },
            {
              "name": "深圳市龙华新区民治恒帆维贸易商行",
              "value": 0
            },
            {
              "name": "武汉华恒远行商贸有限公司",
              "value": 0
            },
            {
              "name": "深圳市龙岗区布吉镇坂田飞宇手机配件店",
              "value": 0
            },
            {
              "name": "深圳市亿富鼎通信科技有限公司",
              "value": 0
            },
            {
              "name": "深圳市狼图营销咨询顾问有限公司",
              "value": 0
            },
            {
              "name": "吉林省安华通信科技发展有限公司",
              "value": 0
            },
            {
              "name": "深圳市宝安区沙井友谊通讯店",
              "value": 0
            },
            {
              "name": "深圳市灵魂世纪贸易有限公司\t",
              "value": 0
            },
            {
              "name": "深圳市宝安区龙华丰佳通讯店",
              "value": 0
            },
            {
              "name": "深圳市酷瑞时代科技有限公司\t",
              "value": 0
            },
            {
              "name": "北京乐享环宇数码器材批发中心",
              "value": 0
            },
            {
              "name": "朔州市万通鼎盛商贸有限公司",
              "value": 0
            },
            {
              "name": "深圳市中视电子有限公司",
              "value": 0
            },
            {
              "name": "深圳市理德御品贸易有限公司",
              "value": 0
            },
            {
              "name": "深圳市远威达科技有限公司\t",
              "value": 0
            },
            {
              "name": "深圳市晟之鹏科技有限公司\t",
              "value": 0
            },
            {
              "name": "深圳市广懋蓝丰电子科技有限公司",
              "value": 0
            },
            {
              "name": "深圳市龙华新区观澜中讯通手机店",
              "value": 0
            },
            {
              "name": "深圳市龙华新区龙华恒丰佳手机配件店\t",
              "value": 0
            },
            {
              "name": "深圳市龙华新区大浪小优手机店",
              "value": 0
            },
            {
              "name": "昆山市金三角通讯设备有限公司",
              "value": 0
            }
          ]
        }
      ]
    }
  ];

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
