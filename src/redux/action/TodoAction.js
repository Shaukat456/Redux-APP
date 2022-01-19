export const AddAction=(InputData)=>{
    return {
        type: 'Addi',
        payload:{
            id:new Date().getTime().toString(),
            InputData:InputData
        }
    }
}

export const deleteAction=()=>{
    return {
        type :"Deletei"
    }
}

export const RemoveAction=()=>{
    return {
        type :"Removei"
    }
}