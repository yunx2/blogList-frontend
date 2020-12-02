const notificationReducer = (state = '', action) => {
  switch (action.type) {
  case 'SET':
    return action.data
  default:
    return state
  }
}

export const setNotification = message => {
  return {
    type: 'SET',
    data: message
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR',
    data: ''
  }
}
export default notificationReducer