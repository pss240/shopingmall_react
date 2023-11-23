import React, { useEffect, useState } from 'react'
import { RootState } from '../reducers'
import { useDispatch, useSelector } from 'react-redux'
import './CarryPage.css'
const CarryPage = () => {
  interface Merchan{
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:{rate:number,count:number};
    incart:number;
  }
  const [budget, setBudget] = useState(0)
  const dispatch = useDispatch()
  const merchansInCart:Merchan[] = useSelector((state:RootState) => state.merchansInCart)
  
  return (
    <div>
      <p>장바구니</p>
      <div className='div_cartList'>
        {merchansInCart.map((merchan,index) =>
          <div key={index} className='div_merchan'>
            <img src={merchan.image} alt='img' className='img_merchan'></img>
            <div className='div_detail'>
              <p>{merchan.category}</p>
              <p>{merchan.title}</p>
              <p>{merchan.price} x {merchan.incart} = $ {merchan.price*merchan.incart}</p>
            </div>
            <div className='div_count'>
              <button>-</button>
              <span className='input_count'> {merchan.incart}</span>
              <button>+</button>
            </div>
          </div>
        )}
        <div className='div_budget'>
          <span>합계 : {budget}</span>
          <button>계산하기</button>
        </div>
      </div>
    </div>
  )
}

export default CarryPage