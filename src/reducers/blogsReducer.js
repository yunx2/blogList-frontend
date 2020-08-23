import { getAll, create, update, deleteBlog } from '../services/blogs'

const blogsReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_ALL':
    return action.data
  case 'CREATE': {
    const newBlog = action.data
    return state.concat(newBlog)
  }
  case 'LIKE': {
    const updatedBlog = action.data
    return state.map(current => {
      if (current.id === updatedBlog.id) {
        return updatedBlog
      }
      return current
    })
  }
  case 'DELETE': {
    const id = action.data
    return state.filter(blog => blog.id !== id)
  }
  default:
    return state
  }
}

export const getAllBlogs = () => {
  return async (dispatch) => {  // dispatch is the redux dispatch function; NOT react-redux useDispatch hook
    const blogs = await getAll()
    dispatch({
      type: 'GET_ALL',
      data: blogs
    })
  }
}

export const createNewBlog = blogData => {
  return async (dispatch) => {
    const newBlog = await create(blogData)
    dispatch({
      type: 'CREATE',
      data: newBlog
    })
  }
}

export const likeBlog = blog => {
  return async (dispatch) => {
    const updated = await update(blog.id, blog)
    console.log('response:', updated)
    dispatch({
      type: 'LIKE',
      data: updated
    })
  }
}

export const deleteById = id => {
  return async (dispatch) => {
    await deleteBlog(id)
    dispatch({
      type: 'DELETE',
      data: id
    })
  }
}

export default blogsReducer