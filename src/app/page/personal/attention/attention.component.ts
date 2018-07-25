import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-attention',
  templateUrl: './attention.component.html',
  styleUrls: ['./attention.component.scss']
})
export class AttentionComponent implements OnInit {
  tabs = ['全部', '默认分组', '竞品', '客户', '经销商', '营销商'];
  groups = ['默认分组', '竞品', '客户', '经销商', '营销商'];
  size = 'small';
  radioValue = '默认分组';
  addGroup = false;
  saveGroup = Array(this.groups.length).fill(true);

  constructor(private modalService: NgbModal) {
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
}
