const catReducer =(state=[],action)=>{
    switch(action.type){
        case "FETCH-CATOGORIES":
        return action.payload
        default :
        return state 

    }
}

export default catReducer;