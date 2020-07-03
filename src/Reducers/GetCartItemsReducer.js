const GetCartItemsReducer=(state=[],action)=>{
    switch(action.type){
        case "GETCARTITEMS":
            return action.payload
        default :
        return state

    }
}

export default GetCartItemsReducer

