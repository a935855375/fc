import {Component, Inject, OnInit} from '@angular/core';
import {PageScrollInstance, PageScrollService} from 'ngx-page-scroll';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-hotnews',
  templateUrl: './hotnews.component.html',
  styleUrls: ['./hotnews.component.scss']
})
export class HotnewsComponent implements OnInit {

  constructor(private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {

    let pageScrollInstance: PageScrollInstance = PageScrollInstance
      .newInstance({document: this.document, pageScrollDuration: 0, scrollTarget: undefined});
    pageScrollInstance.setScrollPosition(0);
    this.pageScrollService.start(pageScrollInstance);
  }

}
