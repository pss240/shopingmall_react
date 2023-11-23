import React from 'react'
import "./Nav.css"
import { useNavigate } from 'react-router-dom'
const Nav = () => {
  const navigate = useNavigate()
  const handleClick = (path) =>{
    if (path == 'cart')
      navigate(`/carryer`)
    else if (path == 'user')
      navigate(`/login`)
    else if(path == "exit")
      navigate("/exit")
    else if(path == '/')
      navigate("/")
  }
  return (
    
    <nav className='nav'>
        <span className='nav_logo' onClick={()=>handleClick("/")}>SHOP</span>
        <div className='div_icon'>
            <img onClick={() =>handleClick("cart")} src='#' alt='carry_icon' className='nav__icon'/>
            <img onClick={() =>handleClick("user")} src='#' alt='user_icon' className='nav__icon'/>
            <img onClick={() =>handleClick("exit")} src='#' alt='exit_icon' className='nav__icon'/>
        </div>
    </nav>
  )
}

export default Nav