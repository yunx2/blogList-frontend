import { login } from '../services/login'
import { setToken } from '../services/blogs'

const loggedInUserReducer = (state = null, action) => {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return action.data
  case 'LOGIN_FAIL':
    return null
  case 'CLEAR':
    return null
  default:
    return state
  }
}

// export const checkUserCredentials = userCredentials => {
//   return async (dispatch) => {
//     const userInfo = await login(userCredentials)
//     window.localStorage.setItem(
//       'loggedInUser', JSON.stringify(userInfo)
//     )
//     setToken(userInfo.token)
//     dispatch({
//       type: 'SET_USER',
//       data: userInfo
//     })
//   }
// }

export const authenticateUser = userCredentials => {
  return async dispatch => {
    login(userCredentials)
      .then(userInfo => {
        window.localStorage.setItem(
          'loggedInUser', JSON.stringify(userInfo)
        );
        setToken(userInfo.token);
        dispatch({
          type: 'LOGIN_SUCCESS',
          data: userInfo
        })
      })
      .catch(err => {
        dispatch({
          type: 'LOGIN_FAIL',
        })
      })
  }
}

export const setFromLocalStorage = userCredentials  => {
  return {
    type: 'LOGIN_SUCCESS',
    data: userCredentials
  }
}

export const logout = () => {
  return {
    type: 'CLEAR'
  }
}

export default loggedInUserReducer