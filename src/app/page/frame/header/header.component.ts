import {Component} from '@angular/core';
import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  k = 0;
  isCollapsed = true;
  isDropDown = true;
  isLogin: Boolean;

  constructor(private auth: AuthService) {
    this.isLogin = auth.isLoggedIn();
    auth.getLoginSubject().subscribe(x => {
      this.isLogin = x;
    });
  }

  mouseover(event) {
    this.isDropDown = !this.isDropDown;
  }

  mouseout(event) {
    this.isDropDown = !this.isDropDown;
  }

  logout() {
    this.isDropDown = true;
    this.auth.logout();
  }
}
