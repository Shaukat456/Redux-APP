const initially=false;
const ShowApp=(state=initially ,action)=>{
    switch(action.type){
        case  "show": return state===true
        case " hide" :return state===false 
        default : return state
    }
}