const LoginReducer=(state=null,action)=>{
    switch(action.type){
        case "LOGIN-SUCESS" :
            return action.payload
        case "AUTH_FAILED" :
            return action.payload

        default :
            return state
    }

}
export default LoginReducer