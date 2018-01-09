import { Injectable } from '@angular/core';
import 'rxjs/Observable';
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';

@Injectable()
export class SocketService {

  constructor(private socket: Socket) {}

  getMessage() {
    return this.socket
        .fromEvent<any>("msg")
        .map(data => {data.msg;});
  }

  sendMessage(msg) {
    this.socket
        .emit("msg", msg);
  }
}
