import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "./DetailPage.css"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { fetchMerchan } from '../actions/merchanDetail';
const DetailPage = () => {
  interface Merchan{
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:{rate:number,count:number};
  }
  const useQuery = () => {
    
    return new URLSearchParams(useLocation().search);
  }
  
  let query = useQuery();
  const dispatch = useDispatch()
  const detailId = query.get('q')
  const navigate = useNavigate();
  const merchan = useSelector((state:RootState) => state.merchan)
  useEffect(() =>{
    dispatch(fetchMerchan(detailId))
    console.log(merchan)
  }, [dispatch])
  const handleCart = (merchan:Merchan) =>{
    dispatch({type:"FETCH_CART",payload:merchan});
  }
  const handleNav = () =>{
    navigate("/carryer")
  }

  return (
    <div className='div_container'>
      <img className='img' src={merchan.image}></img>
      <div className='div_detail'>
        <p className='category'>{merchan.category}</p>
        <p className='name'>{merchan.title}</p>
        <p className='price'>${merchan.price}</p>
        <span className='description'>{merchan.description}</span>
        <div className='div_buttons'>
          <button onClick={() => handleCart(merchan)} className='button'>장바구니에 담기</button>
          <button onClick={() =>handleNav()} className='button'>장바구니로 이동</button>
        </div>
      </div>
    </div>
  )
}

export default DetailPage