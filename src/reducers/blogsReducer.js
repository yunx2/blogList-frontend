import { getAll } from '../services/blogs'

const blogsReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT':
    return action.data
  default:
    return state
  }
}

export const getAllBlogs = () => {
  return async (dispatch) => {
    const blogs = await getAll()
    console.log('blogs', blogs)
    dispatch({
      type: 'INIT',
      data: blogs
    })
  }
}
export default blogsReducer