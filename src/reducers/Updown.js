const InitialState=0

const UpdateNumber=(state=InitialState,action)=>{
switch (action.type) {
    case "increment": return state + 1
    case "decrement": return state - 1


    default: return state
        
}
}

export default UpdateNumber;