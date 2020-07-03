import axios from "axios"

//const key=localStorage.getItem("KEY");
const API=(key)=>{
    return axios.create({
        baseURL:"https://my-ecom-api.herokuapp.com/api/",
        headers:{Authorization:`bearer ${key}`} ,
        withCredentials:true,
        'Access-Control-Allow-Origin': '*'
      


    })

}

//export default axios.create({
    //baseURL:"http://localhost:3001/api/",
   // headers:{Authorization:`bearer ${key}`}
//})
export default API
