import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import * as socketio from 'socket.io-client';
import { AppSettings } from "app/appSettings";


@Injectable()
export class BlockSocketService {
  private baseSocketServerUrl: string = AppSettings.BLOCK_SOCKET_SERVER_URL;

  private socket;

  constructor(){
    this.initSocket();
  }

  public initConnection(){
    this.socket.emit('block_connected');
  }


  private initSocket(): void {
    this.socket = socketio(this.baseSocketServerUrl);
  }

  public getBlockConnection() {
    let observable = new Observable(observer => {
      this.socket.on('block_response', (data) =>{
        observer.next(data.block_data);
        console.log(data.block_data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  public getBlock() {
    let observable = new Observable(observer => {
      this.socket.on('background_block_sender', (data) =>{
        observer.next(data.latest_block_data);
        console.log(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

}
