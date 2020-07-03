const LogoutReducer=(state=null,action)=>{
    switch(action.type){
        case "LOGOUT-SUCESSFULL":
            return action.payload
        case "LOGOUT-FAILED":
            return action.payload

        default :
        return state
    }
}

export default LogoutReducer;