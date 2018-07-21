import {Component, Input} from '@angular/core';
import {D3Service, Node} from '../../../d3';

@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g (mouseenter)="highLight()" (mouseleave)="unHighLight()" style="cursor: pointer" [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <svg:circle
          class="node"
          [attr.fill]="node.color"
          cx="0"
          cy="0"
          [attr.opacity]="node.opacity"
          [attr.r]="node.r">
      </svg:circle>
      <svg:text
          class="node-name"
          [attr.font-size]="node.fontSize">
        {{node.name}}
      </svg:text>
    </svg:g>
  `,
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;

  constructor(private d3Service: D3Service) {
  }

  highLight() {
    this.d3Service.highLight(this.node);
  }

  unHighLight() {
    this.d3Service.unHighLight();
  }
}
