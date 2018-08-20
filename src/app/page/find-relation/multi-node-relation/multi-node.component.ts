import {Component} from '@angular/core';

@Component({
  selector: 'app-multi-node',
  templateUrl: './multi-node.component.html',
  styleUrls: ['../find-relation.component.scss']
})
export class MultiNodeComponent {
  company = Array(5);

  showDemo() {
    console.log('show demo');
  }

  recieve(e, id) {
    this.company[id] = e;
    console.log(this.company);
  }
}
