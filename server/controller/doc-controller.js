

import { doc } from "../models/model.js"


export const getDoc = async (id) => {

    if(id === null) return

    const docs = await doc.findById(id)

    if(docs) return docs

    return await doc.create({_id:id,data:""})

}


export const updateDoc = async (id,data) => {
    return await doc.findByIdAndUpdate(id,{data})
}