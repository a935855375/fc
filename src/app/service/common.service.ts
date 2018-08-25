import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Subject} from 'rxjs';

@Injectable()
export class CommonService {
  special = 0;
  promise = 0;
  spitem1 = 0;
  spitem2 = 0;

  subject = new Subject<string>();

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

  getMultipleAssociationGraph(nodes) {
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

  getSearchHint(key, kind) {
    const url = environment.apiUrl + 'searchhint';
    const params = {key: key, kind: kind};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  /*法律诉讼信息*/
  getLegalactionInfo(id) {
    const url = environment.apiUrl + 'legalaction';
    const params = {id: id};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  /*经营状况信息*/
  getOperatingConditions(id) {
    const url = environment.apiUrl + 'operatingconditions';
    const params = {id: id};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  /*热门推荐*/
  getNews() {
    const url = environment.apiUrl + 'news';
    return this.http.get(url).toPromise();
  }

  /*热门推荐详细信息*/
  getNewsInfo(info) {
    const url = environment.apiUrl + 'newsbody';
    const params = {url: info};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  /*专利查询-商标*/
  getBrand(name) {
    const url = environment.apiUrl + 'searchbrand';
    const params = {key: name};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

  /*专利查询-商标详细信息*/
  getBrandInfo(id) {
    const url = environment.apiUrl + 'brandbody';
    const params = {id: id};
    const options = {params: params};
    return this.http.get(url, options).toPromise();
  }

}
