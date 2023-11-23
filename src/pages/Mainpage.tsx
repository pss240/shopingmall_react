import React, {useEffect} from 'react'
import Banner from '../components/Banner'
import "./MainPage.css"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../reducers'
import { fetchMerchan } from '../actions/merchan'
import Product from '../components/product'
import categories from '../reducers/categories'

interface Merchan{
  id:number;
  title:string;
  price:number;
  description:string;
  category:string;
  image:string;
  rating:{rate:number,count:number};
}


const MainPage = () => {
  
  const dispatch = useDispatch();
  const merchans:Merchan[] = useSelector((state:RootState) => state.merchans)
  const category = useSelector((state:RootState) => state.categories);
    useEffect(() => {
        dispatch(fetchMerchan())
      }, [dispatch])

  return (
    <div className='container'>
       <Banner/>
       <div className='div_main'>
        <p>showing: {merchans.length} items</p>
        <div className='div_products'>

        {merchans.filter((merchan)=>category=="ALL"||merchan.category==category).map((merchan,index) => 
        <div key={index}>
          <Product product = {merchan}></Product>
        </div>
        )}
        </div>
       </div>
    </div>
  )
}

export default MainPage