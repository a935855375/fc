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
  companies: Company[] = [];
  persons: Person[] = [];


  constructor(private commonService: CommonService) {
    this.commonService.getPersonalGraphById(localStorage.getItem('cid'), 5).then((x: any) => {
      console.log(x);
      this.target = new Target();
      this.target.name = x.Result.Name;


      for (let z = 0; z < x.Result.touzi.length; z++) {
        this.companies.push(new Company(x.Result.touzi[z].Name, x.Result.touzi[z].FundedRatio));
      }


      for (let z = 0; z < x.Result.DetailList.length; z++) {
        this.persons.push(new Person(x.Result.DetailList[z].Name, x.Result.DetailList[z].Percent.trim()));
      }

      this.flag = true;
    });
  }

  ngOnInit() {
  }


}
