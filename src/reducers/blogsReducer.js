import { getAll, create, update } from '../services/blogs'

const blogsReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT':
    return action.data
  case 'CREATE': {
    const newBlog = action.data
    const response = create(newBlog)
    // console.log('response: ', response)
    return state.concat(newBlog)
  }
  case 'LIKE': {
    const blog = action.data
    console.log('blog:', blog)
    const blogObj = { ...blog, likes: blog.id + 1 }
    const updatedBlog = update(action.data, blogObj)
    return state.map(current => {
      if (current.id === blog.id) {
        return updatedBlog
      }
      return current
    })
  }
  default:
    return state
  }
}

export const getAllBlogs = () => {
  return async (dispatch) => {  // dispach is the redux dispatch function; NOT react-redux useDispatch hook
    const blogs = await getAll()
    // console.log('blogs', blogs)
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

export const likeBlog = blog => {
  return async (dispatch) => {
    dispatch({
      type: 'LIKE',
      data: blog
    })
  }
}

export default blogsReducer