import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss'],
})
export class InfoModalComponent implements OnInit {
  k: number = 0;

  @Output() clicked: EventEmitter = new EventEmitter();

  constructor() {
  }

  close() {
    this.clicked.emit();
  }

  ngOnInit() {
  }

}
