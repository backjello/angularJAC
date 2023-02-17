import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent{

  user = {
    nome : 'mario',
    image : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  }

  @Input() destinatario:string=""

  @Input() messaggi:Message[] = []

  constructor(private socket:SocketService, private localStorage:LocalstorageService) {
  
  }

  mandaMessaggio(){
    const nome = this.localStorage.read('utente').firstName

    const messaggio : Message = {
      data :  "2022-02-15 12:45", // data del messasggio
      nome : this.destinatario, //destinatario messaggio
      testo : "Ciao sono "+nome, // corpo del messaggio
    }

    this.socket.sendMessage(messaggio)

  }

}
