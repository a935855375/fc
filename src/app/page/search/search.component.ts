import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../service/search.service';
import {Company} from '../../entity/bean';

@Component({
  selector: 'app-search-result',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  key: string;

  companies: Company[];

  constructor(private router: ActivatedRoute, private searchService: SearchService) {

  }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.searchService.search(params.key, params.kind).then(x => {
        this.key = params.key;
        this.companies = (x as any[]).map(x => x._source) as Company[];
      });
    });
  }

  ngOnDestroy(): void {

  }


}
