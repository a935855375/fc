import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-attention',
  templateUrl: './attention.component.html',
  styleUrls: ['./attention.component.scss']
})
export class AttentionComponent implements OnInit {
  tabs = ['全部', '默认分组', '竞品', '客户', '经销商', '营销商'];
  flag_tabs = Array(this.tabs.length).fill(false);
  flag_idx = 0;
  groups = ['默认分组', '竞品', '客户', '经销商', '营销商'];
  group = '默认分组';
  radioValue = '默认分组';
  addGroup = false;
  saveGroup = Array(this.groups.length).fill(true);

  constructor(private modalService: NgbModal) {
    this.flag_tabs[0] = true;
  }

  ngOnInit() {
  }

  openModal(content) {
    this.modalService.open(content, {windowClass: 'ass-modal'});
  }

  editModal(content) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
  }

  adGroup(idx) {
    this.addGroup = true;
  }

  addSave() {
    this.addGroup = false;
  }

  addCancel() {
    this.addGroup = false;
  }

  edGroup(idx) {
    this.saveGroup[idx] = false;
  }

  saGroup(idx) {
    this.saveGroup[idx] = true;
  }

  canGroup(idx) {
    this.saveGroup[idx] = true;
  }

  changeTab(idx) {
    this.flag_tabs[this.flag_idx] = false;
    this.flag_tabs[idx] = true;
    this.flag_idx = idx;
  }

  onCheck(radio) {
    this.group = radio;
  }
}
