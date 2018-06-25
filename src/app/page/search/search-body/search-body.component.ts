import {Component, Input} from '@angular/core';
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
  selected = 'option1';

  constructor(private companyService: CompanyService, private router: Router) {

  }

  navigate(cid) {
    this.companyService.cid = cid;
    console.log(cid);
    this.router.navigate(['/company'])
  }

}
