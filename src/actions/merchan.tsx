import axios from "axios";



export const fetchMerchan = ():any => async(dispatch:any,getState:any)=>{
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch({type:"FETCH_MERCHAN",payload:response.data})
}