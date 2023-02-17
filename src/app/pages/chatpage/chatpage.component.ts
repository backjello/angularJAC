import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent{

  persone: string[] =[]
  chatAperta:string = ""
  messaggi:Message[]=[]
  notificheDa:string[] = [] // contiene tutte le persone dalle quali ricevo una notifica

  constructor(private socket : SocketService, private localStorage:LocalstorageService) { 
   
    const vecchieChat = this.localStorage.read('messaggi')
    if(vecchieChat.length > 0){
      this.messaggi = vecchieChat
    }

    socket.personeConnesse.subscribe((res)=>{
      console.log(res)
      this.persone = res
    })
    this.socket.messaggi.subscribe((res:Message)=>{ // funzione che ascolta l'arrivo dei messaggi
      res.letto = false // segno che il messaggio non è stato letto
      this.messaggi.push(res) // aggiungo il messaggio appena ricevuto agli altri
      this.setNotifiche()
      this.localStorage.save(this.messaggi,'messaggi') // salvo tutti i messaggi nel localstorage
    })
  }

  setNotifiche(){
    this.messaggi.forEach((m:Message)=>{
      if(m.letto == false){ // ho trovato un messaggio non letto
        // aggiungo la persona dalla quale ho ricevuto il messaggio alle notifiche
        if(m.mittente)
          this.notificheDa.push(m.mittente) 
      }
    })
  }

  setChat(persona:string){
    this.chatAperta = persona
  }

  getMessaggiFiltrati(nome:string){ //nome della persona con la quale chattiamo
    return this.messaggi.filter((m)=> m.mittente == nome || m.nome == nome )
  }
  
}
