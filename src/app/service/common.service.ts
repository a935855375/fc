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

  getSecondEquityStructureGraphById(id) {
    const url = environment.apiUrl + 'secondequitystructuregraph';
    const params = {id: id.toString()};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }
  getCompanyShortInfoByKey(key: string) {
    const url = environment.apiUrl + 'companyShortInfo';
    const params = {key: key};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  getBossGraphById(id) {
    const url = environment.apiUrl + 'bossgraph';
    const params = {id: id.toString()};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  /*老板信息*/
  getBossInfoById(id) {
    const url = environment.apiUrl + 'bossinfo';
    const params = {id: id};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  getMultipleAssociationGraphById(nodes) {
    const url = environment.apiUrl + 'multipleAssociationGraph';
    const params = {nodes: nodes};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  getHintCompany(name) {
    const url = environment.apiUrl + 'hintcompany';
    const params = {name: name};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  getHintBoss(id) {
    const url = environment.apiUrl + 'hintboss';
    const params = {id: id};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }
}
