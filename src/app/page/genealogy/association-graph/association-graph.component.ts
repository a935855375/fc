import {Component, OnInit} from '@angular/core';
import {Link, Node} from '../../../chart/graph/d3/models';
import {CommonService} from '../../../service/common.service';

@Component({
  selector: 'app-association-graph',
  templateUrl: './association-graph.component.html',
  styleUrls: ['./association-graph.component.scss']
})
export class AssociationGraphComponent implements OnInit {
  flag: boolean = false;
  nodes: Node[] = [];
  links: Link[] = [];

  constructor(private commonService: CommonService) {
  }

  ngOnInit(): void {
    this.commonService.getAssociationGraphById(localStorage.getItem('cid')).then((x: any) => {
      x.nodes.forEach((x: any) => this.nodes.push(new Node(x.id, x.name, x.category)));
      x.links.forEach((x: any) => this.links.push(new Link(this.nodes[x.source], this.nodes[x.target], x.value)));
      this.flag = true;
    });
  }


}
