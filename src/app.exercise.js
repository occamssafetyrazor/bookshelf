/** @jsx jsx */
import {jsx} from '@emotion/core'

import * as React from 'react'
// 🐨 you're going to need this:
import * as auth from 'auth-provider'
import {AuthenticatedApp} from './authenticated-app'
import {UnauthenticatedApp} from './unauthenticated-app'
import {useState} from 'react'

function App() {
  // 🐨 useState for the user
  const [user, setUser] = useState(null);
  // 🐨 create a login function that calls auth.login then sets the user
  const login = async (user)=>{
    auth.login(user)
      .then(userData=>{setUser(userData)})
  }

  const register = async (user)=>{
    auth.register(user)
      .then(userData=>{setUser(userData)})
  }

  const logout = ((user) =>{
    auth.logout()
      .then(
        setUser(null)
      )

  })

  // 💰 const login = form => auth.login(form).then(u => setUser(u))
  // 🐨 create a registration function that does the same as login except for register

  // 🐨 create a logout function that calls auth.logout() and sets the user to null

  // 🐨 if there's a user, then render the AuthenticatedApp with the user and logout
  // 🐨 if there's not a user, then render the UnauthenticatedApp with login and register
  if(user){
    return <AuthenticatedApp user={user} logout={logout} />
  }
  return <UnauthenticatedApp />
}

export {App}

/*
eslint
  no-unused-vars: "off",
*/
