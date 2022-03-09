import React from 'react'

const LoginForm = () => {
  return (
    <form>
        <label>Name: </label>
        <input id="name" type="text" required/>
        <label>Password: </label>
        <input id="password" type="password" required/>
        <button type="submit">Log In</button>
    </form>
  )
}

export default LoginForm