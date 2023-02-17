export interface Message {
    nome?: string, // opzionale (destinario)
    mittente?: string, // opzionale (quando mandiamo un messaggio noi non lo mettiamo (ci pensa il server))
    data: string,
    testo: string,
    ricevuto?: boolean // opzionale
}
