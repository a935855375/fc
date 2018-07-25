import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  tabs = ['个人通知', '系统消息'];

  constructor() {
  }

  ngOnInit() {
  }

}
