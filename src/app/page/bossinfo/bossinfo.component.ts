import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bossinfo',
  templateUrl: './bossinfo.component.html',
  styleUrls: ['./bossinfo.component.scss']
})
export class BossinfoComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  openModal(content) {
    this.modalService.open(content, {size: 'lg'});
  }
}
