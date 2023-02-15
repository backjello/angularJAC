import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Message } from '../models/message';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  personeConnesse = this.socket.fromEvent<string[]>('connected')
  messaggi = this.socket.fromEvent<any>('message')

  nome:string=""

  constructor(private socket:Socket, private localStorage:LocalstorageService){
    socket.connect()
    this.nome = this.localStorage.read('utente').firstName
    socket.emit("join",this.nome)
  }

  sendMessage(messaggio:Message){
    this.socket.emit("message",messaggio)
  }

}
