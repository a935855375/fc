import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-enterprise-graph',
  templateUrl: './enterprise-graph.component.html',
  styleUrls: ['./enterprise-graph.component.scss'],
  animations: [
    trigger('modalStatus', [
      state('open', style({
        display: 'block',
        opacity: 1
      })),
      state('close', style({
        display: 'none',
        opacity: 0
      })),
      transition('open => close', animate('250ms ease-out')),
      transition('close => open', animate('250ms ease-in'))
    ])
  ]
})
export class EnterpriseGraphComponent implements OnInit {
  flag: boolean = false;
  dataset;

  modalStatus = 'close';

  current;

  constructor(private commonService: CommonService) {
  }

  width: number;
  height: number;

  openModal(event) {
    if (this.current != event) {
      this.modalStatus = 'close';
      setTimeout(() => {
        this.modalStatus = 'open';
      }, 250);
    }
    this.current = event;
  }

  closeModal() {
    this.modalStatus = 'close';
  }

  ngOnInit() {
    this.width = window.innerWidth;
    this.height = window.innerHeight - 62;

    this.commonService.getPersonalGraphById(localStorage.getItem('cid'), 2).then((x: any) => {
      console.log(x);
      this.dataset = x.Result.Node;
      this.flag = true;
    });
  }

}
