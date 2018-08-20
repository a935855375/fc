import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Node} from '../../chart/graph/d3/models';
import {Link} from '../../chart/graph/d3/models';
import {CommonService} from '../../service/common.service';

@Component({
  selector: 'app-find-relation',
  templateUrl: './find-relation.component.html',
  styleUrls: ['./find-relation.component.scss']
})
export class FindRelationComponent implements OnInit, AfterViewInit {
  @ViewChild('card') card: ElementRef;

  select = 0;

  flag = false;

  nodes: Node[];
  links: Link[];

  charge: number;
  width;
  height;

  constructor(private commonService: CommonService) {
    /*this.nodes = this.data.nodes.map(x => new Node(x.id, x.name, x.category));
    this.links = this.data.links.map(x => new Link(this.nodes[x.source], this.nodes[x.target], x.relation));
    this.charge = -1;*/
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.width = this.card.nativeElement.offsetWidth;
    this.height = this.card.nativeElement.offsetHeight;
  }
}
