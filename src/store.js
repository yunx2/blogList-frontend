import { createStore } from 'redux'

import notificationReducer from './reducers/notificationReducer'

const store = createStore(notificationReducer)

store.subscribe(() => console.log(store))

export default store