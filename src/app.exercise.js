/** @jsx jsx */
import {jsx} from '@emotion/core'

import * as React from 'react'
// 🐨 you're going to need this:
import * as auth from 'auth-provider'
import {AuthenticatedApp} from './authenticated-app'
import {UnauthenticatedApp} from './unauthenticated-app'
import {useEffect, useState} from 'react'
import {client} from './utils/api-client';

function App() {
  // 🐨 useState for the user
  const [user, setUser] = useState(null);
  // const [token, setToken] = useState(null);
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

  const getUser = async ()=>{
    const token = await auth.getToken();
    if(token){
      client('me', token).then(data => {
        setUser(data.user);
        console.log(data.user);
        // return Promise.resolve()
      })
    }
  }

  useEffect( () =>{
    getUser()
  }, [])

  // 💰 const login = form => auth.login(form).then(u => setUser(u))
  // 🐨 create a registration function that does the same as login except for register

  // 🐨 create a logout function that calls auth.logout() and sets the user to null

  // 🐨 if there's a user, then render the AuthenticatedApp with the user and logout
  // 🐨 if there's not a user, then render the UnauthenticatedApp with login and register
  if(user){
    return <AuthenticatedApp user={user} logout={logout} />
  } else{
    return <UnauthenticatedApp login={login} register={register} />
  }
}

export {App}

/*
eslint
  no-unused-vars: "off",
*/
