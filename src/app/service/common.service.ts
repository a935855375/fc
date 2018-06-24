import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class CommonService {
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
}
