import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../service/search.service';
import {Company} from '../../entity/bean';

@Component({
  selector: 'app-search-result',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
  key: string;
  kind: number;

  companies: Company[];

  constructor(private router: ActivatedRoute, private searchService: SearchService) {

  }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.serachProise = this.searchService.search(params.key, params.kind).then(x => {
        this.companies = (x as any[]).map(x => x._source) as Company[];
      });
    });
  }

  ngOnDestroy(): void {

  }


}
