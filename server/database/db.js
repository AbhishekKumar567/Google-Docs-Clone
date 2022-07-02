
import mongoose from "mongoose"

export const Connection = async (username='abhishek',password=13579) =>{
    const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.ubwis.mongodb.net:27017,cluster0-shard-00-01.ubwis.mongodb.net:27017,cluster0-shard-00-02.ubwis.mongodb.net:27017/GOOGLEDOCS?ssl=true&replicaSet=atlas-pd5e58-shard-0&authSource=admin&retryWrites=true&w=majority`

     try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
        console.log('connection established')
     }catch(error){
        console.log('Error',error)
     }
}