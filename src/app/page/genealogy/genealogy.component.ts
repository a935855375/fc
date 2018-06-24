import {Component, Inject, OnInit} from '@angular/core';
import {PageScrollInstance, PageScrollService} from 'ngx-page-scroll';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-genealogy',
  templateUrl: './genealogy.component.html',
  styleUrls: ['./genealogy.component.scss']
})
export class GenealogyComponent implements OnInit {
  selector = 0;


  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    // 移动到顶部位置
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.document, pageScrollDuration: 0});
    pageScrollInstance.setScrollPosition(0);
    this.pageScrollService.start(pageScrollInstance);
  }

  changePage(page: number) {
    this.selector = page;
  }

}
