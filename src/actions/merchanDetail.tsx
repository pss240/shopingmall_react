import axios from "axios";



export const fetchMerchan = (id:any):any => async(dispatch:any,getState:any)=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch({type:"FETCH_MERCHAN_DETAIL",payload:response.data})
}