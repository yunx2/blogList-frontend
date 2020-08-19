import { getAll, create } from '../services/blogs'

const blogsReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT':
    return action.data
  case 'CREATE': {
    const newBlog = action.data
    create(newBlog)
    return state.concat(newBlog)
  }
  default:
    return state
  }
}

export const getAllBlogs = () => {
  return async (dispatch) => {  // dispach is the redux dispatch function; NOT react-redux useDispatch hook
    const blogs = await getAll()
    console.log('blogs', blogs)
    dispatch({
      type: 'INIT',
      data: blogs
    })
  }
}

export const createNewBlog = blogData => {
  return async (dispatch) => {
    dispatch({
      type: 'CREATE',
      data: blogData
    })
  }
}

export default blogsReducer