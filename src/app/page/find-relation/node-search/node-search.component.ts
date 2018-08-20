import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-node-search',
  templateUrl: './node-search.component.html',
  styleUrls: ['../find-relation.component.scss']
})
export class NodeSearchComponent {
  @ViewChild('input') input: ElementRef;
  @ViewChild('myDrop1') drop1;

  @Output() emitter: EventEmitter<any> = new EventEmitter<any>();

  width = 0;

  constructor(private commonService: CommonService) {

  }

  bossList = [];

  bossSelectedList = [];

  selectButton = false;

  settings = {
    singleSelection: true,
    text: '请选择人',
    classes: 'myclass custom-class'
  };

  inputKey = '';

  companyItems = [];

  selectedCompany;

  keyChange(e) {
    this.width = this.input.nativeElement.offsetWidth;
    if (this.companyItems.length == 0)
      this.drop1.close();
    this.commonService.getHintCompany(e).then((x: any) => {
      this.companyItems = x.map(z => z._source);
      if (this.companyItems.length != 0)
        this.drop1.open();
    });
  }

  selectCompany(c) {
    this.inputKey = c.name;
    this.selectedCompany = c;
    this.emitter.emit({company: this.selectedCompany.id});
    if (this.selectButton) {
      this.commonService.getHintBoss(this.selectedCompany.id).then((x: any) => {
        this.bossList = x;
      });
    }
  }

  selectBoss(boss) {
    this.emitter.emit({company: this.selectedCompany.id, boss: boss.itemName});
  }

  enableSelectBoss() {
    this.selectButton = !this.selectButton;
    if (this.selectButton) {
      this.commonService.getHintBoss(this.selectedCompany.id).then((x: any) => {
        this.bossList = x;
      });
    }
  }
}
