import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageScrollInstance, PageScrollService} from 'ngx-page-scroll';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  selector = 0;

  constructor(private router: Router,
              private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any) {
    const paths = this.router.url.split('/');
    const to = paths[paths.length- 1];
    switch (to) {
      case 'basicinfo':
        this.selector = 0;
        break;
      case 'legalproceed':
        this.selector = 1;
        break;
      case 'operatingcondition':
        this.selector = 2;
        break;
      case 'businessrisk':
        this.selector = 3;
        break;
      case 'businessreport':
        this.selector = 4;
        break;
      case 'intellectual':
        this.selector = 5;
        break;
      case 'historyinfo':
        this.selector = 6;
        break;
    }
  }

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
