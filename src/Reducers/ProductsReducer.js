const ProductReducer=(state=null,action)=>{
    switch(action.type){
        case "FETCHED-PRODUCTS" :
            return action.payload
        default :
            return state
    }

}

export default ProductReducer