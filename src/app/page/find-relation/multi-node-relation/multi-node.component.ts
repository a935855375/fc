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

  line = 4;

  company = Array(5);

  rangeArray = (start, end) => Array(end - start + 1).fill(0).map((v, i) => i + start);

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

  add(arg) {
    if (arg == 0 && this.line < 5)
      this.line = this.line + 1;
    if (arg == 1 && this.line > 1)
      this.line = this.line - 1;
  }
}
