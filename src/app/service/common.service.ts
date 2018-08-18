import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class CommonService {
  special = 0;
  promise = 0;
  spitem1 = 0;
  spitem2 = 0;

  constructor(private http: HttpClient) {

  }

  register(username: string, mail: string, password: string) {
    const url = environment.apiUrl + 'register';
    return this.http.post(url, {username: username, mail: mail, password: password}).toPromise();
  }

  getEnterpriseGraphById(id) {
    const url = environment.apiUrl + 'enterprisegraph';
    const params = {id: id.toString()};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  getInvestmentGraphById(id) {
    const url = environment.apiUrl + 'investmentgraph';
    const params = {id: id.toString()};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  getAssociationGraphById(id) {
    const url = environment.apiUrl + 'associationgraph';
    const params = {id: id.toString()};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  getEquityStructureGraphById(id) {
    const url = environment.apiUrl + 'equitystructuregraph';
    const params = {id: id.toString()};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  getSuspectedControllerById(id) {
    const url = environment.apiUrl + 'suspectedcontroller';
    const params = {id: id.toString()};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  getPersonalGraphById(id, kind) {
    const url = environment.apiUrl + 'personalGraph';
    const params = {id: id.toString(), kind: kind.toString()};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  getCompanyShortInfoByKey(key: string) {
    const url = environment.apiUrl + 'companyShortInfo';
    const params = {key: key};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  /*test() {
    const url = environment.apiUrl + 'tempAssociationgraph';
    return this.http.get(url).toPromise();
  }

  test2(body) {
    const url = environment.apiUrl + 'tempAssociationgraph';
    return this.http.post(url, body).toPromise();
  }*/

  getBossGraphById(id) {
    const url = environment.apiUrl + 'bossgraph';
    const params = {id: id.toString()};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }
}
