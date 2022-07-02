
import {Server} from 'socket.io'
import { Connection } from './database/db.js'
import { getDoc,updateDoc } from './controller/doc-controller.js'

const PORT = 8000

Connection()

const io = new Server(PORT,{
   cors:{
    origin:'http://localhost:3000',
    methods:['GET','POST']
   }
})

io.on('connection',socket => {

    socket.on('get-document',async(documentId) => {
        
        const document = await getDoc(documentId)
        socket.join(documentId)
        socket.emit('load-document',document.data)

        socket.on('send-changes',delta =>{
            socket.broadcast.to(documentId).emit('receive-changes',delta)
        })

        socket.on('save-document',async(data) =>{
            await updateDoc(documentId,data)
        })
    })
})
