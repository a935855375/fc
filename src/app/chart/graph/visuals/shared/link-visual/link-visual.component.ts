import {Component, Input} from '@angular/core';
import {Link} from '../../../d3';

@Component({
  selector: '[linkVisual]',
  template: `
    <svg:g>
      <svg:line
        class="link"
        [attr.x1]="link.getSourceX()"
        [attr.y1]="link.getSourceY()"
        [attr.x2]="link.getTargetX()"
        [attr.y2]="link.getTargetY()"
        [ngStyle]="{'stroke': link.getColor(),'stroke-width': link.width, 'marker-end': link.getArrowColor(), 'stroke-opacity': link.opacity}"
      >
      </svg:line>
      <text *ngIf="!link.isMultiple()" [attr.x]="link.getX()"
            [attr.y]="link.getY()"
            [attr.transform]="'rotate(' + link.getAngle() + ' ' + link.getX() + ',' + link.getY() + ')'"
            style="text-anchor: middle;">{{link.relationship}}
      </text>
    </svg:g>
  `,
  styleUrls: ['./link-visual.component.css']
})
export class LinkVisualComponent {
  @Input('linkVisual') link: Link;
}
