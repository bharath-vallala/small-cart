import API from "../Apis/API.cat"
var jwtCheck = require('jsonwebtoken');


export const fetchCatogories =()=>{
    return async (dispatch,getState)=>{

      const result=  await API(null).get("/catogories/").then((res)=>{
        dispatch({type:"FETCH-CATOGORIES",payload:res.data}) 
      }).catch((err)=>{
        console.log(err.response);
      })
      
    }

}






export const selectedCarogery=(id)=>{
  return {
      type:"SELECTED-CATOGERY",
      payload:id

  }

  //export const selectedCarogery=(id)=>{
    //return async (dispatch,getstate)=>{
      //await dispatch(fetchProducts(id))

    //}
  

}

export const fetchProducts=(id)=>{
  return async (dispatch,getState)=>{
    console.log(getState().CatId)
    const result=await API(null).get(`Products/getProductsByCatogeryId/${id}`)
    dispatch({type:"FETCHED-PRODUCTS",payload:result.data})
  }
}

export const loginUser=(FormData)=>{
  
  return async (dispatch,State)=>{
    const result=await API(null).post("/users/login",FormData,).then((res)=>{
    
        console.log(res.data.JWT)
        dispatch(AccessToken(res.data.JWT));
       dispatch({type:"LOGIN-SUCESS",payload:res})
      
       console.log(State().AccessToken);
      
      

    }).catch((err)=>{
      console.log(err.response.status)
         dispatch({ type: "AUTH_FAILED" ,payload:err.response});

    })
   
    
  }

}

export const  addToCart=(Data)=>{
  return async (dispatch,State)=>{
    //console.log(State().LoginData.data.JWT)
    
     await dispatch(checkAccessToken());
     console.log(State().AccessToken)

      const result =await API(State().AccessToken).post("/cart/addCartItems/",Data).then((res)=>{
        dispatch({type:"ADDTOCART",payload:res})
        console.log(res.data)
        dispatch(getCartItems(State().LoginData.data.userData.user_id));
        //console.log(State().LoginData.data.userData.user_id)
        
  
      }).catch((err)=>{
        console.log(err.response);
        dispatch(getCartItems(State().LoginData.data.userData.user_id));
      })
      


    
    
   
  }

}

export const getCartItems=(id)=>{
  return async (dispatch,State)=>{
   
    await dispatch(checkAccessToken());
    ///await dispatch(checkAccessToken());
     console.log(State().AccessToken)

    const result=await API(State().AccessToken).get(`/cart/getCartItems/${id}`).then((res)=>{
      dispatch({type:"GETCARTITEMS",payload:res.data})
      console.log(res.data)
    }).catch((err)=>{
      console.log(err.response);

    })
  }
}

export const increaseItemByOne=(data)=>{
  
  
  return async (dispatch,State)=>{
    await dispatch(checkAccessToken());

    await API(State().AccessToken).put('/cart/updateQuantityAdd',data).then((res)=>{
      console.log(res.data);
      dispatch(getCartItems(State().LoginData.data.userData.user_id));

    })
  }
}
  export const decreaseItemByOne=(data)=>{
    return async (dispatch,State)=>{
      await dispatch(checkAccessToken()); 

      await API(State().AccessToken).put('/cart/updateQuantityRemove',data).then((res)=>{
        console.log(res.data);
        dispatch(getCartItems(State().LoginData.data.userData.user_id));
  
      }).catch((err)=>{
        console.log(err.response);
  
      })
    }
}

export const removeCartItem=(user_id,id)=>{
  return async (dispatch,State)=>{
    await dispatch(checkAccessToken());

    await API(State().AccessToken).delete(`/cart/deleteCartItem/${user_id}/${id}`).then((res)=>{
      console.log(user_id,id)
      console.log(res.data);
      dispatch(getCartItems(State().LoginData.data.userData.user_id));
      
    }).catch((err)=>{
      console.log(err)
    })
  }
}

export const AccessToken=(id)=>{
  return {
    type:"JWT-TOKEN",
    payload:id
  }
}

const  checkAccessToken=()=>{
 
  
  return async(dispatch,State)=>{

    console.log(State().AccessToken)
    var decodedToken=jwtCheck.decode(State().AccessToken, {complete: true});
    console.log(decodedToken.payload.exp < Math.floor(Date.now() / 1000))

    if(decodedToken.payload.exp < Math.floor(Date.now() / 1000)){
      console.log("im in ")
    await API(null).get("/users/token").then((res)=>{
      
      dispatch(AccessToken(res.data.JWT));

    }).catch((err)=>{
      console.log(err.response)
    })

  }else{
    dispatch(AccessToken(State().AccessToken))
  }
     
}


}

export const logout=(id)=>{
  return (dispatch,State)=>{
    API().put(`/users/logout/${id}`).then(res=>{
      dispatch({type:"LOGOUT-SUCESSFULL",payload:res.data})
    }).catch(err=>{
      dispatch({type:"LOGOUT-FAILED",payload:err.response})
    })
  }
}














