import { useEffect, useState } from 'react'
import { legacy_createStore } from 'redux'
import { UserCheckResponse } from '../Interface/user'
export const initialState = {
  data: {},
  isLoggedIn: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        data: action.payload,
        isLoggedIn: true
      }
    case 'LOGOUT':
      return {
        ...state,
        data: {},
        isLoggedIn: false
      }
    default:
      return state
  }
}

export const store = legacy_createStore(reducer)

export const login = (payload) => {

  store.dispatch({
    type: 'LOGIN',
    payload: payload
  })
  return payload
}

export const logout = () => {
  store.dispatch({
    type: 'LOGOUT'
  })
}

export const getUser = () => {
  return store.getState()
}

export const isLoggedIn = () => {
  return store.getState().isLoggedIn
}

export const getUserName = () => {
  return store.getState().data?.user?.fullname
}

export const getUserId = () => {
  return store.getState().data?.user?.id
}

export const useUserState = () => {
  const [user, setUser] = useState(getUser())
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setUser(getUser())
    }
    )
    return () => {
      unsubscribe()
    }
  }
    , [])
  return user as { data: UserCheckResponse, isLoggedIn: boolean }
}