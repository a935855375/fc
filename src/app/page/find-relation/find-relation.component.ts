import {Component, OnInit, ViewChild} from '@angular/core';
import {Ng2SearchPipe} from 'ng2-search-filter';

@Component({
  selector: 'app-find-relation',
  templateUrl: './find-relation.component.html',
  styleUrls: ['./find-relation.component.scss']
})
export class FindRelationComponent implements OnInit {
  selected = '';
  value1 = 1;
  boxWidth = this.value1 / 10 * 100;
  sInfo = true;
  addCompany = [false];
  dflag = [false, false, false];

  handle(s: string): void {
  }

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


  settings = {};
  settings1 = {};
  settings2 = {};
  settings3 = {};
  select = 0;

  f = false;

  constructor() {

  }

  ngOnInit() {
    this.settings = {
      singleSelection: true,
      text: '请选择人',
      classes: 'myclass custom-class'
    };
    this.settings1 = {
      singleSelection: true,
      text: '雷军',
      classes: 'myclass custom-class'
    };
    this.settings2 = {
      singleSelection: true,
      text: '黎万强',
      classes: 'myclass custom-class'
    };
    this.settings3 = {
      singleSelection: true,
      text: '傅盛',
      classes: 'myclass custom-class'
    };
  }

  changeValue(con) {
    this.value1 = con;
    this.boxWidth = this.value1 / 10 * 100;
  }

  /*两节点关系-添加公司*/
  /*两节点关系*/
  flag1 = false;
  flag2 = false;
  selFlag1 = true;
  selFlag2 = true;

  selPerson1() {
    this.flag1 = !this.flag1;
  }

  selPerson2() {
    this.flag2 = !this.flag2;
  }

  itemList1 = [
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
  selectedItems1 = [];
  selectedItems2 = [];

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems1);
  }

  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems1);
  }

  width1 = 0;
  key1: string = '';

  @ViewChild('myDrop1') myDrop1;
  @ViewChild('input1') input1;

  addcom: string[] = ['小米科技有限责任公司',
    '北京小米支付技术有限公司',
    '小米通讯技术有限公司',
    '熊小米(北京)文化传播有限公司',
    '北京小米保险经纪有限公司'];


  filter = (array: string[], key: string) => array.filter(x => x.includes(key));

  keyChanged1(event) {
    this.width1 = this.input1.nativeElement.offsetWidth;
    this.key1 = event;
    this.selFlag1 = false;
    if (!(this.filter(this.addcom, this.key1).length === 0 || this.key1.length === 0)) {
      this.myDrop1.open();
    } else {
      this.myDrop1.close();
    }
  }

  click1(value: string): void {
    this.key1 = value;
    this.input1.nativeElement.focus();
  }

  width2 = 0;
  key2: string = '';

  @ViewChild('myDrop2') myDrop2;
  @ViewChild('input2') input2;

  keyChanged2(event) {
    this.width2 = this.input2.nativeElement.offsetWidth;
    this.key2 = event;
    this.selFlag2 = false;
    if (!(this.filter(this.addcom, this.key2).length === 0 || this.key2.length === 0)) {
      this.myDrop2.open();
    } else {
      this.myDrop2.close();
    }
  }

  click2(value: string): void {
    this.key2 = value;
    this.input2.nativeElement.focus();
  }

  /*两节点关系-添加公司*/

  /*多节点关系-添加公司*/
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

  ditemList1 = [
    {'id': 1, 'itemName': '雷军'},
    {'id': 2, 'itemName': '黎万强'},
    {'id': 3, 'itemName': '洪峰'},
    {'id': 4, 'itemName': '刘德'},
    {'id': 5, 'itemName': '林斌'},
    {'id': 6, 'itemName': '刘芹'},
    {'id': 8, 'itemName': '许达来'}
  ];
  ditemList2 = [
    {'id': 1, 'itemName': '洪峰'},
    {'id': 2, 'itemName': '雷军'},
    {'id': 3, 'itemName': '林斌'},
    {'id': 4, 'itemName': '刘德'},
  ];
  dselectedItems1 = [];
  dselectedItems2 = [];

  donItemSelect1(item: any) {
    console.log(item);
    console.log(this.dselectedItems1);
  }

  dOnItemDeSelect1(item: any) {
    console.log(item);
    console.log(this.dselectedItems1);
  }

  donItemSelect2(item: any) {
    console.log(item);
    console.log(this.dselectedItems2);
  }

  dOnItemDeSelect2(item: any) {
    console.log(item);
    console.log(this.selectedItems2);
  }

  /*多节点关系-添加公司*/

  /*多节点关系-选择*/
  dSelect = false;

  selectDuo() {
    this.dSelect = true;
  }

  /*多节点关系-选择*/

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
