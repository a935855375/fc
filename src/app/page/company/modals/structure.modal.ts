import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from '../../../service/common.service';


@Component({
  selector: 'structure-modal',
  template: `
    <div #div class="modal-header">
      <h4 class="modal-title">股权结构</h4>
      <button type="button" class="close" aria-label="Close" (click)="bsModalRef.dismiss()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="mb-1">
        <span style="font-size: 18px;color: #333;">疑似实际控制人：</span> <span class="relation">雷军</span> <span
        class="final-radio-wrap"> <span id="final-radio">77.8%</span> </span> <span class="relation">小米科技有限责任公司</span>
      </div>
      <indented-tree *ngIf="flag" [width]="width" [dataset]="data"></indented-tree>
    </div>
  `,
  styleUrls: ['./modal.scss']

})
export class StructureModal implements OnInit {
  @ViewChild('div') set assetInput(elRef: ElementRef) {
    this.div = elRef;
  }

  div: ElementRef;

  flag: boolean = false;

  width = 0;

  constructor(public bsModalRef: NgbActiveModal, private commonService: CommonService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.width = this.div.nativeElement.offsetWidth;
    });

    this.commonService.getPersonalGraphById(1, 1).then(x => {
      this.data.children = [];
      this.data.name = x.Result.Name;
      x.Result.DetailList.forEach(x => this.data.children.push({name: x.Name, percent: x.Percent, money: x.ShouldCapi}));
      this.flag = true;
    });
  }

  data = {
    'name': 'flare',
    'children': [],
  };
}

