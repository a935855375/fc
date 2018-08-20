import {Component} from '@angular/core';

@Component({
  selector: 'app-two-node',
  templateUrl: './two-node.component.html',
  styleUrls: ['../find-relation.component.scss']
})
export class TwoNodeComponent {
  showPath = false;

  value1 = 1;
  boxWidth = this.value1 / 10 * 100;

  selectButton = false;

  inputKey = '';

  companyItems = [];

  itemList = [
    {'id': 1, 'itemName': '雷军'},
    {'id': 2, 'itemName': '黎万强'},
    {'id': 3, 'itemName': '洪峰'},
    {'id': 4, 'itemName': '刘德'},
    {'id': 5, 'itemName': '林斌'},
    {'id': 6, 'itemName': '刘芹'},
    {'id': 8, 'itemName': '许达来'}
  ];

  itemSelectedList = [];

  settings = {
    singleSelection: true,
    text: '请选择人',
    classes: 'myclass custom-class'
  };

  changeValue(con) {
    this.value1 = con;
    this.boxWidth = this.value1 / 10 * 100;
  }

  keyChange(value) {

  }

  selectCompany(company) {
    console.log(company);
  }

  selectBoss(boss) {
    console.log(boss);
  }
}
