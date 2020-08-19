const notificationReducer = (state = '', action) => {
  console.log('state:', state, 'action:', action.type)
  switch (action.type) {
  case 'SET':
    return action.data
  case 'CLEAR':
    return ''
  }
  return state
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