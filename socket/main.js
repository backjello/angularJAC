const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http,{
  cors:{
    origin:'*'
  },
});
const port = 3333;
const { on } = require('events');

const personeConnesse = []
const ipList = []

http.listen(port,'0.0.0.0', () => {
    console.log(`Server avviato`);
  });

io.on('connection', (socket,data,callback) => {

    let ip =socket.request.connection.remoteAddress
  
    if(ipList.indexOf(ip)==-1)
      ipList.push(ip)
    
    else{
      console.log('già connesso')
      return;
    }

    socket.on('join', (data) => {
        socket.nome = data
        socket.join(data)
        personeConnesse.push(data)

        console.log(data + " si è unito");
        console.log('le persone connesse adesso sono : '+personeConnesse);

        for (let i = 0; i < personeConnesse.length; i++) {
          const persona = personeConnesse[i];
          const j = personeConnesse.indexOf(persona)
          const personeCopy = JSON.parse(JSON.stringify(personeConnesse))
          personeCopy.splice(j,1)
          io.in(persona).emit('connected',personeCopy)
        }
    }); 

    
    socket.on('disconnect', ()=> {
      const index = ipList.indexOf(ip);
      ipList.splice(index,1);
      personeConnesse.splice(index,1)
      for (let i = 0; i < personeConnesse.length; i++) {
        const persona = personeConnesse[i];
        const j = personeConnesse.indexOf(persona)
        const personeCopy = JSON.parse(JSON.stringify(personeConnesse))
        personeCopy.splice(j,1)
        io.in(persona).emit('connected',personeCopy)
        console.log(socket.nome + " si è disconnesso");
      }
    });
    
    socket.on('message' ,(data)=>{ 
        const destinatario = data.destinatario
        const mittente = data.mittente
        const messaggio = data.messaggio
        const dataOra = data.data
        console.log(`${mittente} scrive a ${destinatario}: "${messaggio}" - ${dataOra}`);
        io.in(destinatario).emit('message',data)
    }) 
    
});