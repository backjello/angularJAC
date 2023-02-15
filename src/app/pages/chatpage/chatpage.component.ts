import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {

  persone: string[] =[]
  chatAperta:string = ""

  constructor(private socket : SocketService) { 
    socket.personeConnesse.subscribe((res)=>{
      console.log(res)
      this.persone = res
    })
  }

  setChat(persona:string){
    this.chatAperta = persona
  }

  ngOnInit(): void {
  }

}
