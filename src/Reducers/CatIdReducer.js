const catIdReducer=(id=null,action)=>{
    switch(action.type){
        case "SELECTED-CATOGERY":
            return action.payload
        default :
            return id
    }
}
export default catIdReducer