import {Component, OnInit} from '@angular/core';
import {Ng2SearchPipe} from 'ng2-search-filter';

@Component({
  selector: 'app-find-relation',
  templateUrl: './find-relation.component.html',
  styleUrls: ['./find-relation.component.scss']
})
export class FindRelationComponent implements OnInit {
  value1 = 0;
  boxWidth = this.value1 / 10 * 100;
  sInfo = true;
  addCompany = [false];
  dflag = [false, false, false];

  addCom() {
    if (this.addCompany.length < 3) {
      this.addCompany.push(false);
    } else {
      alert('添加公司不能超过五个');
    }
  }

  divCom() {
    this.addCompany.shift();
  }

  seeInfo() {
    this.sInfo = !this.sInfo;
  }

  itemList = [
    {'id': 1, 'itemName': '雷军'},
    {'id': 2, 'itemName': '黎万强'},
    {'id': 3, 'itemName': '洪峰'},
    {'id': 4, 'itemName': '刘德'},
    {'id': 5, 'itemName': '林斌'},
    {'id': 6, 'itemName': '刘芹'},
    {'id': 8, 'itemName': '许达来'}
  ];
  itemList2 = [
    {'id': 1, 'itemName': '洪峰'},
    {'id': 2, 'itemName': '雷军'},
    {'id': 3, 'itemName': '林斌'},
    {'id': 4, 'itemName': '刘德'},
  ];
  selectedItems = [];
  selectedItems2 = [];
  settings = {};
  select = 0;

  f = false;

  constructor() {

  }

  /*两节点关系*/
  flag1 = false;
  flag2 = false;

  selPerson1() {
    console.log('ss');
    this.flag1 = !this.flag1;
  }

  selPerson2() {
    console.log('ss');
    this.flag2 = !this.flag2;
  }

  /*多节点关系*/
  dflag1 = false;
  dflag2 = false;

  selDPerson1() {
    this.dflag1 = !this.dflag1;
  }

  selDPerson2() {
    this.dflag2 = !this.dflag2;
  }

  selDPerson(idx) {
    this.dflag[idx] = !this.dflag[idx];
  }

  ngOnInit() {
    this.settings = {
      singleSelection: true,
      text: '请选择人',
      classes: 'myclass custom-class'
    };

  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }

  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }


  content = '';
  selected: string;
  show: boolean = false;
  filter = new Ng2SearchPipe();

  changeValue(con) {
    this.value1 = con;
    this.boxWidth = this.value1 / 10 * 100;
  }

  change(content: string): void {
    this.show = true;
    this.content = content;
    if (this.filter.transform(this.items, this.content).length === 0 || this.content.length === 0)
      this.show = false;
  }

  click(value: string): void {
    this.selected = value;
    this.show = false;
    this.content = value;
  }

  content2 = '';
  selected2: string;
  show2: boolean = false;
  filter2 = new Ng2SearchPipe();

  change2(content: string): void {
    this.show2 = true;
    this.content2 = content;
    if (this.filter.transform(this.items, this.content2).length === 0 || this.content2.length === 0)
      this.show2 = false;
  }

  click2(value: string): void {
    this.selected2 = value;
    this.show2 = false;
    this.content2 = value;
  }

  items: string[] = ['小米科技有限责任公司',
    '北京小米支付技术有限公司',
    '小米通讯技术有限公司',
    '熊小米(北京)文化传播有限公司',
    '北京小米保险经纪有限公司'];


  options = {
    title: {
      text: ''
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
        symbolSize: 45,
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
          repulsion: 10000
        },
        edgeSymbolSize: [4, 50],
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
          name: '洪峰',
          draggable: true,
        }, {
          name: '雷军',
          category: 0,
          draggable: true,
        }, {
          name: '小米商业保理(天津)有限责任公司',
          category: 1,
          draggable: true,
        }, {
          name: '上海小米金融信息服务有限公司',
          category: 1,
          draggable: true,
        }, {
          name: '捷付睿通股份有限公司',
          category: 1,
          draggable: true,
        }],
        links: [{
          source: 0,
          target: 2,
          value: '法人，总经理'
        }, {
          source: 0,
          target: 3,
          value: '法人，董事长'
        }, {
          source: 0,
          target: 4,
          value: '任职'
        }, {
          source: 1,
          target: 2,
          value: '执行董事'
        }, {
          source: 1,
          target: 3,
          value: '董事'
        }, {
          source: 1,
          target: 4,
          value: '董事长，法人'
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
