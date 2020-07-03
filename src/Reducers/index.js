import catReducer from "./Catogories.Reducer"
import ProductsReducer from "./ProductsReducer"
import {combineReducers} from "redux"
import CatIdReduder from "./CatIdReducer"
import LoginReducer from "./LoginReducer"
import GetCartItemsReducer from "./GetCartItemsReducer"
import AddtoCartReducer from "./AddtoCartReducer"
import AccessTokenReducer from "./AccessTokenReducer"
import LogoutReducer from "./LogoutReducer"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig={
   key:"root",
   storage,
   whitelist:["Catogories","Products","CatId","LoginData","CartItems","AccessToken"]
}

const appReducer = combineReducers({
   Catogories:catReducer,
   Products:ProductsReducer,
   CatId:CatIdReduder,
   LoginData:LoginReducer,
   CartItems:GetCartItemsReducer,
   AddtoCart:AddtoCartReducer,
   AccessToken:AccessTokenReducer,
   LogoutData:LogoutReducer

    
    })

    const  rootReducer=(state,action)=>{

      if (action.type === "LOGOUT-SUCESSFULL") {
        
         storage.removeItem('persist:root')
        
 
         state = undefined;
         console.log(state)
     }
     return appReducer(state, action);

    }



    export default persistReducer(persistConfig,rootReducer)
 

