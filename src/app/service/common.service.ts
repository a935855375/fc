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

  test() {
    const url = environment.apiUrl + 'test';
    return this.http.get(url, {observe: 'response'}).toPromise();
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
}
