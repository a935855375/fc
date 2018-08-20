import {Component, EventEmitter, Output} from '@angular/core';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-multi-node',
  templateUrl: './multi-node.component.html',
  styleUrls: ['../find-relation.component.scss']
})
export class MultiNodeComponent {
  @Output() emitter: EventEmitter<any> = new EventEmitter<any>();
  arg: string;

  company = Array(5);

  showDemo() {
    console.log('show demo');
  }

  recieve(e, id) {
    this.company[id] = e;
  }

  begin() {
    this.arg = '';
    this.company.forEach(x => {
      let c = x.company;
      if (x.boss) {
        c = c + '_' + x.boss;
      }
      this.arg = this.arg + ',' + c;
    });
    this.arg = this.arg.substring(1);

    this.emitter.emit(this.arg);
  }
}
