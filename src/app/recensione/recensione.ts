export interface Recensione {
    body: string,
    id: number,
    postId: number,
    user: userData
}

interface userData {
    id: number,
    username: string
}

// user: {id: 35, username: 'mbrooksbanky'}