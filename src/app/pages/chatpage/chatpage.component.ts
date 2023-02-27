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
  // contiene tutte le persone dalle quali ricevo una notifica e il numero di notifiche
  notificheDa: { nome: string, tot: number }[] = [] 

  constructor(private socket : SocketService, private localStorage:LocalstorageService) {    
    const vecchieChat = this.localStorage.read('messaggi')
    if(vecchieChat.length > 0){
      this.messaggi = vecchieChat
      this.setNotifiche()
    }

    socket.personeConnesse.subscribe((res)=>{
      console.log(res)
      this.persone = res
    })

    this.socket.messaggi.subscribe((res:Message)=>{ // funzione che ascolta l'arrivo dei messaggi
      res.letto = false // segno che il messaggio non è stato letto
      this.messaggi.push(res) // aggiungo il messaggio appena ricevuto agli altri
      this.setNotifiche()
      this.salvaMessaggi()
    })
  }

  salvaMessaggi(){
    this.localStorage.save(this.messaggi,'messaggi') // salvo tutti i messaggi nel localstorage
  }

  setNotifiche(){
    this.notificheDa = [] // resettiamo l'array 
    this.messaggi.forEach((m:Message)=>{
      // controllo che il messaggio non sia letto e non mi sia stato mandato
      // dalla persona conc cui ho una chat aperta
      if(m.letto == false && this.chatAperta != m.mittente){ 
        // ho trovato un messaggio non letto 
        // aggiungo la persona dalla quale ho ricevuto il messaggio alle notifiche
        if(m.mittente){
          for (let i = 0; i < this.notificheDa.length; i++) {
            const element = this.notificheDa[i] // singola persona nell'elenco delle notifiche
            if( element.nome == m.mittente){
              element.tot++
              return              
            }       
          }
          // è la prima notifica da questa persona, la aggiungo con una notifica
          this.notificheDa.push({ nome: m.mittente, tot:1})
        }
      }
      else{
        m.letto = true
      }
    })
  }

  setChat(persona:string){
    this.chatAperta = persona
    this.messaggi.forEach((m:Message)=>{
      if(m.mittente == persona){
        m.letto = true
      }
    })
    this.setNotifiche()   // aggiorno lo stato delle notifiche
    this.salvaMessaggi()  // aggiorno i messaggi salvati nel localstorage
  }

  getMessaggiFiltrati(nome:string){ //nome della persona con la quale chattiamo
    return this.messaggi.filter((m)=> m.mittente == nome || m.nome == nome )
  }
  //dato il nome di una persona ritorna il numero di notifiche
  getNnotifiche(persona:string){
    
    for (let i = 0; i < this.notificheDa.length; i++) {
      const element = this.notificheDa[i];
      if(element.nome == persona)
        return element.tot // ritorno il numero di notifiche
    }
    // se non ho trovato la persona ritorno false
    return false
  }

}
