import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genealogy',
  templateUrl: './genealogy.component.html',
  styleUrls: ['./genealogy.component.scss']
})
export class GenealogyComponent implements OnInit {
  selector = 0;


  constructor() { }

  ngOnInit() {
  }

  changePage(page: number) {
    this.selector = page;
  }

}
