import {Component, Input} from '@angular/core';
import {Company} from '../../../entity/bean';

@Component({
  selector: 'app-search-body',
  templateUrl: './search-body.component.html',
  styleUrls: ['./search-body.component.scss']
})
export class SearchBodyComponent {
  @Input() company: Company[];
  selected = 'option1';
}
