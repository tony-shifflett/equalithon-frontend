import React from 'react'

const RegisterForm = () => {
  return (
    <form className='registrationForm'>
        <label>First Name: </label>
        <input id="firstName" type="text" required/>
        <label>Last Name:</label>
        <input id="lastName" type="text" required/>
        <label>Email: </label>
        <input id="email" type="text" required/>
        <label>Confirm Email: </label>
        <input id="confirmEmail" type="text" required/>
        <label>Password: </label>
        <input id="password" type="password" required/>
        <label>Confirm Password:</label>
        <input id="confirmPassword" type="password" required/>
        <button className='submitRegistration' type="submit">Submit</button>
    </form>
  )
}

export default RegisterForm