import { Component, OnInit,OnDestroy } from '@angular/core';
import { SocketService } from '../socket.service'

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  msg: string;
  count: number = 0;
  massage_text: string;
  massages = <any>[];
  show_notification: boolean = false;
  show_count: boolean = false;

  constructor(public socketService: SocketService) {
    debugger;
  }

  ngOnInit() {
    this.socketService
        .getMessage()
        .subscribe(msg => {
          if (typeof msg != 'undefined'){
            this.massages.push(msg);
            this.count = this.massages.length;
          }

        });
    debugger;
  }

  sendMsg() {
    this.show_count = true;
    this.count ++;
    this.msg = 'Notification'+this.count;
    this.massages.push('Notification'+this.count);
    this.socketService.sendMessage(this.msg);

  }
  showNotification () {
    this.show_notification = true;
    this.show_count = false;
  }
}
