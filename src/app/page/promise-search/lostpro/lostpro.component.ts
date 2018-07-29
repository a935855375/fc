import {Component, OnInit} from '@angular/core';
import {default as LOSTPRO, Lostpro} from './lostpro';

@Component({
  selector: 'app-lostpro',
  templateUrl: './lostpro.component.html',
  styleUrls: ['./lostpro.component.scss']
})
export class LostproComponent implements OnInit {
  page = 1;
  lostpros: Lostpro[] = LOSTPRO;

  constructor() {
    console.log(LOSTPRO);
  }

  ngOnInit() {
  }

}
