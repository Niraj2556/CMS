import React from 'react'

/* Components */
import Login from '../components/Login'
import Register from '../components/Register'
import Settings from '../components/Settings'

function Account() {
  return (
    <div>
        <h2>Account</h2>
        <Register />
        <Login />
        <Settings />
    </div>
  )
}

export default Account;