import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PageScrollInstance, PageScrollService} from 'ngx-page-scroll';
import {DOCUMENT} from '@angular/common';
import {CompanyService} from '../../service/company.service';
import {Subscription} from 'rxjs/src/internal/Subscription';
import {Company} from '../../entity/bean';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit, OnDestroy {
  selector = 0;
  company: Company;
  subscription: Subscription;

  constructor(private router: Router,
              private pageScrollService: PageScrollService,
              private companyService: CompanyService,
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
    let pageScrollInstance: PageScrollInstance = PageScrollInstance
      .newInstance({document: this.document, pageScrollDuration: 0, scrollTarget: undefined});
    pageScrollInstance.setScrollPosition(0);
    this.pageScrollService.start(pageScrollInstance);

    this.subscription = this.companyService.getSubject().subscribe(x => {
      this.company = x as Company;
    })
  }

  changePage(page: number) {
    this.selector = page;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
