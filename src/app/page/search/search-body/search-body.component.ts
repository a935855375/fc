import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Company} from '../../../entity/bean';
import {CompanyService} from '../../../service/company.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-body',
  templateUrl: './search-body.component.html',
  styleUrls: ['./search-body.component.scss']
})
export class SearchBodyComponent {
  @Input() company: Company[] = [];
  @Input() k: string;
  @Output() fromChild = new EventEmitter<number>();
  selected = '0';

  constructor(private companyService: CompanyService,
              private router: Router) {
  }

  page = 1;

  replaceFun = (source: string, key: string) => source.replace(key, '<em>' + key + '</em>');

  sort(e) {
    this.fromChild.emit(e);
  }

  navigate(id) {
    this.companyService.cid = id;
    localStorage.setItem('cid', id);
    this.router.navigate(['company']);
  }
}
