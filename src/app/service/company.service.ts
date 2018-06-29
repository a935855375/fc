import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Subject} from 'rxjs';

@Injectable()
export class CompanyService {
  cid = localStorage.getItem('cid');
  subject = new Subject();

  constructor(private http: HttpClient) {
  }

  getBasicInfo(id) {
    const url = environment.apiUrl + 'companyinfo';
    const params = {id: id};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  getSubject() {
    return this.subject;
  }


}
