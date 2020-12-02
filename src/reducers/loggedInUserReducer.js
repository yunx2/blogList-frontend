import { useDispatch } from 'react-redux';

import { login } from '../services/login'
import { setToken } from '../services/blogs';
import { setNotification } from './notificationReducer'

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
        dispatch(setNotification('welcome ' + userInfo.name))
        setTimeout(() => {
          dispatch(setNotification(''))
        }, 3000)
      })
      .catch(err => {
        dispatch({
          type: 'LOGIN_FAIL',
        })
        dispatch(setNotification('wrong credentials'));
        setTimeout(() => {
          dispatch(setNotification(''))
        }, 3000)
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