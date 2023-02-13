import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';

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

  messaggi:Message[] = [
    {
      data: '2022-02-13 12:07:00',
      nome: 'mario',
      testo: 'Ciao, come stai ?',
      ricevuto: true
    },
    {
      data: '2022-02-13 12:08:00',
      testo: 'Ciao, io tutto bene, tu ?',
      ricevuto: false
    },
    {
      data: '2022-02-13 12:07:00',
      nome: 'mario',
      testo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ricevuto: true
    },
    {
      data: '2022-02-13 12:08:00',
      testo: 'Ciao, io tutto bene, tu ?',
      ricevuto: false
    },
  ]


  constructor() { }

}
