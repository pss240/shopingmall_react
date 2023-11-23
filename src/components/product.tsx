import React from 'react'
import './product.css'
import { useNavigate } from 'react-router-dom';
interface Merchan{
  id:number;
  title:string;
  price:number;
  description:string;
  category:string;
  image:string;
  rating:{rate:number,count:number};
}

type Props = {
  product:Merchan;
}

const Product = ({product}:Props) => {
  const navigate = useNavigate();
  const handleClick = (id:number) =>{
    navigate(`/detail?q=${id}`)
  }
  const truncate = (str:string,n:number)=>{
    return str?.length > n ? str.substr(0,n-1) + "...": str
}
  return (
    <div className='div_product' onClick={() =>handleClick(product.id)}>
      <img className='img_product' src={product.image} alt='product_img'/>
      <p>{truncate(product.title,16)}</p>
      <div className='div_price'>
        <button>장바구니에 담기</button>
      <span>${product.price}</span>
      </div>
    </div>
  )
}

export default Product