import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import notificationReducer from './reducers/notificationReducer'
import blogsReducer from './reducers/blogsReducer'
import loggedInUserReducer from './reducers/loggedInUserReducer'
import usersReducer from './reducers/usersReducer'

const rootReducer = combineReducers({
  notification: notificationReducer,
  blogs: blogsReducer,
  loggedInUser: loggedInUserReducer,
  users: usersReducer
})

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

// store.subscribe(() => console.log(store.getState().blogs))

export default store