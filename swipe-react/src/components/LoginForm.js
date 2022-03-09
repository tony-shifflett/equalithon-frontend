import React from 'react'
import '../styles/LoginForm.css'

const LoginForm = () => {
  return (
    <form className='logInForm'>
        <label>Name: </label>
        <input id="name" type="text" required/>
        <label>Password: </label>
        <input id="password" type="password" required/>
        <button className="submitLogIn" type="submit">Log In</button>
    </form>
  )
}

export default LoginForm