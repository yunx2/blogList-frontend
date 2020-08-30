import { getUsers } from '../services/users'

const userReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_USERS':
    return action.data
  default:
    return state
  }
}

export const getAllUsers = () => {
  return async (dispatch) => {
    const users = await getUsers()
    console.log('users: ', users)
    dispatch({
      type: 'GET_USERS',
      data: users
    })
  }
}

export default userReducer