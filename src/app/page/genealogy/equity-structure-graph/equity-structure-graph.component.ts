import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';
import {Person} from '../../../chart/structure/models/person';
import {Company} from '../../../chart/structure/models/company';
import {Target} from '../../../chart/structure/models/target';

@Component({
  selector: 'app-equity-structure-graph',
  templateUrl: './equity-structure-graph.component.html',
  styleUrls: ['./equity-structure-graph.component.scss']
})
export class EquityStructureGraphComponent implements OnInit {
  flag = false;

  target: Target;
  companies: Company[];
  persons: Person[];


  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.target = new Target();
    this.target.name = '小米科技有限责任公司';

    this.companies = [];
    this.persons = [];

    for (let x = 0; x < 12; x++) {
      this.companies.push(new Company('idxxxxxx' + x, x * 10));
    }

    this.persons.push(new Person('雷军', 77.8));
    this.persons.push(new Person('黎万强', 10.12));
    this.persons.push(new Person('洪峰', 10.07));
    this.persons.push(new Person('刘德', 2.01));
    this.persons.push(new Person('测试', 0.01));
    this.persons.push(new Person('测试', 0.01));
  }


}
