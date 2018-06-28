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
  kind: number;

  companies: Company[];

  people: any[];

  interestedCompany = (companies: Company[]) =>
    companies.filter(x => x.name.search(this.key) != -1).slice(0,5);

  constructor(private router: ActivatedRoute, private searchService: SearchService) {

  }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.key = params.key;
      this.kind = params.kind;
      this.searchService.search(params.key, params.kind).then(x => {
        this.companies = (x as any[]).map(x => x._source) as Company[];
      });
    });

    this.searchService.getInterestedPeople().then(x => {
      this.people = x as any[];
    })
  }

  sort(e) {
    this.searchService.search2(this.key, this.kind, e).then(x => {
      this.companies = (x as any[]).map(x => x._source) as Company[];
    });
  }

  ngOnDestroy(): void {

  }


}
