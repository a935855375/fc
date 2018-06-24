import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-find-relation',
  templateUrl: './find-relation.component.html',
  styleUrls: ['./find-relation.component.scss']
})
export class FindRelationComponent implements OnInit {

  itemList = [];
  selectedItems = [];
  settings = {};

  constructor() {

  }

  ngOnInit() {


    this.itemList = [
      {'id': 1, 'itemName': '马云'},
      {'id': 2, 'itemName': '赵薇'},
      {'id': 3, 'itemName': '马化腾'},
      {'id': 4, 'itemName': '张进'},
    ];
    this.settings = {
      singleSelection: true,
      text: '请选择人',
      classes: 'myclass custom-class'};

  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }

  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onDeSelectAll(items: any) {
    console.log(items);
  }
}
