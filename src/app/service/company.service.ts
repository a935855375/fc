import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class CompanyService {
  cid: number = 1;

  constructor(private http: HttpClient) {
  }

  getBasicInfo(id) {
    const url = environment.apiUrl + 'companyinfo';
    const params = {id: id};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

}
