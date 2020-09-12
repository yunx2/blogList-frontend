import { login } from '../services/login'
import { setToken } from '../services/blogs'

const loggedInUserReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_USER':
    return action.data
  case 'CLEAR':
    return null
  case 'CHECK': {
    return action.data
  }
  default:
    return state
  }
}

export const setLoggedInUserInfo = userCredentials => {
  return async (dispatch) => {
    const userInfo = await login(userCredentials)
    window.localStorage.setItem(
      'loggedInUser', JSON.stringify(userInfo)
    )
    setToken(userInfo.token)
    dispatch({
      type: 'SET_USER',
      data: userInfo
    })
  }
}

export const setFromLocalStorage = userCredentials  => {
  return {
    type: 'CHECK',
    data: userCredentials
  }
}

export const logout = () => {
  return {
    type: 'CLEAR'
  }
}

export default loggedInUserReducer