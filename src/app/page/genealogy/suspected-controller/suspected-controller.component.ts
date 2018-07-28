import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../service/common.service';
import {Link, Node} from '../../../chart/graph/d3/models';

@Component({
  selector: 'app-suspected-controller',
  templateUrl: './suspected-controller.component.html',
  styleUrls: ['./suspected-controller.component.scss']
})
export class SuspectedControllerComponent implements OnInit {
  flag = false;
  title;

  nodes: Node[] = [];
  links: Link[] = [];

  name: string;
  rate: string;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.getSuspectedControllerById(localStorage.getItem('cid')).then((x: any) => {
      const source = new Node(x.person.id, x.person.name, 1);
      const target = new Node(x.company.id, x.company.name, 2);
      this.nodes.push(source);
      this.nodes.push(target);
      this.links.push(new Link(source, target, x.person.shareholding_ratio + '%'));
      this.name = x.person.name;
      this.rate = x.person.shareholding_ratio + '%';
      this.flag = true;
    });
  }

}
