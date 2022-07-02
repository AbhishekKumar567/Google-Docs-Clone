import mongoose from "mongoose"

const docSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true
    },

    data:{
        type:Object,
        required:true
    }

})

export const doc = mongoose.model('doc',docSchema)