import {Component, OnInit} from '@angular/core';
import {default as TRADEMARK, Trademark} from './brand-body';

@Component({
  selector: 'app-brand-body',
  templateUrl: './brand-body.component.html',
  styleUrls: ['./brand-body.component.scss']
})
export class BrandBodyComponent implements OnInit {
  page = 1;
  trademarks: Trademark[] = TRADEMARK;

  constructor() {
  }

  ngOnInit() {
  }

}
