import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {

  persone: string[] =[]
  chatAperta:string = ""
  messaggi:Message[]=[]

  constructor(private socket : SocketService) { 
    socket.personeConnesse.subscribe((res)=>{
      console.log(res)
      this.persone = res
    })
    this.socket.messaggi.subscribe((res)=>{
      this.messaggi.push(res)
    })
  }

  setChat(persona:string){
    this.chatAperta = persona
  }

  ngOnInit(): void {
  }

  getMessaggiFiltrati(nome:string){ //nome della persona con la quale chattiamo
    return this.messaggi.filter((m)=> m.mittente == nome)
  }


}
