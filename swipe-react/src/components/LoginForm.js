import React, {useState} from 'react'
import '../styles/LoginForm.css'
import { Link } from 'react-router-dom'

const LoginForm = () => {

  //local state and event handler to manage password
 const [password, setPassword] = useState('')
 const logPassword = (event)=>{
   setPassword(event.target.value)
 }

 //local state and event handler to manage username
 const [username, setUserName] = useState('')
 const logUserName = (event)=>{
   setUserName(event.target.value)
 }

 //submit form button handler
 const submitClick = ()=>{
   console.log('at this point, authentication would occur')
 }

  return (
    <form className='logInForm'>
        <label>Name: </label>
        <input id="name" type="text" value={username} onChange={logUserName} required/>
        <label>Password: </label>
        <input id="password" type="password" value = {password} onChange={logPassword} required/>
        <Link to={'/postboard'}><button className="submitLogIn" onClick={submitClick} type="submit">Log In</button></Link>
    </form>
  )
}

export default LoginForm