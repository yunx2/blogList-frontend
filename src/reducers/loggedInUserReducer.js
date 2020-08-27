import { login } from '../services/login'
import { setToken } from '../services/blogs'

const loggedInUserReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_USER':
    return action.data
  case 'CLEAR':
    return null
  default:
    return state
  }
}

export const setUserInfo = user => {
  return async (dispatch) => {
    const userInfo = await login(user)
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

export const clearUserInfo = () => {
  return {
    type: 'CLEAR'
  }
}

export default loggedInUserReducer