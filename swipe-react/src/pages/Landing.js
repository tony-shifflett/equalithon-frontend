import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
        <h1>SwipeVC</h1>
        <div className='landingButtonContainer'>
            <Link to="/login"><button className='loginButton'>Log In</button></Link>
            <Link to="/register"><button className='registerButton'>Register</button></Link>
        </div>
    </div>
  )
}

export default Landing