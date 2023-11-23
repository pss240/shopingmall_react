import React from 'react'
import "./LoginPage.css"
const LoginPage = () => {
  return (
    <div className='container'>
        <div className='div_form'>
        <form>
            <p>Login</p>
            <input placeholder='E-main'></input>
            <input placeholder='Password'></input>
            <button type='submit'>Login</button>
        </form>
        </div>
    </div>
  )
}

export default LoginPage