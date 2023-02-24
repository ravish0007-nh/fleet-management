import { createContext, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {  isAuthenticated: true, user: action.payload }
    case 'LOGOUT_USER':
      return { isAuthenticated: false, user: null }
    default:
      return state
  }
}

const initialState = {
  isAuthenticated: false,
  user: null
}

export const UserContext = createContext()

const UserProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = {
    details: state.user,
    isAuthenticated: state.isAuthenticated,
    login: (user) => {
      dispatch({ type: 'LOGIN_USER', payload: user });
    },
    logout: () => {
      dispatch({type: 'LOGOUT_USER'})
    }
  };

  return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
}

export default UserProvider
