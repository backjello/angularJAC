import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {

  connessi:string[]=[]

  constructor(private socket :SocketService) { 
    socket.newMessage.subscribe((res)=>{
      console.log(res);
    })
    socket.personeConnesse.subscribe((res)=>{
      this.connessi = res
    })
  }

  ngOnInit(): void {
  }

}
