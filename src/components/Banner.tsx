import React from 'react'
import './Banner.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../reducers'
const Banner = () => {
  const dispatch = useDispatch()
  const category = useSelector((state:RootState) => state.categories);
  const handleCategory = (num:number) =>{
    if (num==0)
      dispatch({type:"ALL"})
    else if (num==1){
      dispatch({type:"ELECTRONIC"})
    }else if(num==2){
      dispatch({type:"MANCLOTH"})
    }else if(num==3){
      dispatch({type:"WOMANCLOTH"})
    }else if(num==4){
      dispatch({type:"JEWELERY"})
    }
    console.log()
  }

  return (
    <div className='div_banner'>
        <p>
    Products
   </p>
   <div className='div_button'>
    <button onClick={() =>handleCategory(0)}>모두</button>
    <button onClick={() =>handleCategory(1)}>전자기기</button>
    <button onClick={() =>handleCategory(2)}>남성의류</button>
    <button onClick={() =>handleCategory(3)}>여성의류</button>
    <button onClick={() =>handleCategory(4)}>쥬얼리</button>
   </div></div>
  )
}

export default Banner