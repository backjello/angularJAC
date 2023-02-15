import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  newMessage = this.socket.fromEvent<Message>('message')
  personeConnesse = this.socket.fromEvent<string[]>('connected')

  constructor(private socket: Socket,) { 
    socket.connect()
    socket.emit('join',localStorage.getItem('nome'))
    setTimeout(() => {
      this.socket.emit('message',
      { 
        destinatario: 'gino',
        mittente: localStorage.getItem('nome'),
        messaggio:'ciao sono '+localStorage.getItem('nome'),
      }
      )
    }, 5000);
  }

  send(action: string) {
    let data={
      action:action
    }
    this.socket.emit('message/update', data);
  }
}
