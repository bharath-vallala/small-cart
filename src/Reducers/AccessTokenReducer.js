const AccessTokenReducer=(state="",Action)=>{
    switch(Action.type){
        case "JWT-TOKEN":
            return Action.payload
        default :
            return state
     }
}

export default AccessTokenReducer;