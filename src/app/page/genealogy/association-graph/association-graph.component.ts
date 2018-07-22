import {Component, OnInit} from '@angular/core';
import {Link, Node} from '../../../chart/graph/d3/models';
import CONFIG from '../../../chart/graph/graph.config';

@Component({
  selector: 'app-association-graph',
  templateUrl: './association-graph.component.html',
  styleUrls: ['./association-graph.component.scss']
})
export class AssociationGraphComponent {
  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
    const N = 100,
      getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }

    const genRandom = (min, max) => (Math.random() * (max - min + 1) | 0) + min;

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m).setColor(genRandom(0, CONFIG.LINE_COLOR.length - 1)));
      }
    }
  }
}
