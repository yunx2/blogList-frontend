import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Button, Form } from 'react-bootstrap';

import { likeBlog, deleteById } from '../reducers/blogsReducer'
import CommentsList from './CommentsList'
import CommentForm from './CommentForm'

const BlogView = () => {
  const dispatch = useDispatch()
  const blogId = useParams().id
  const blog = useSelector(state => state.blogs.find(blog => blog.id === blogId))
  console.log('blog: ', blog)
  const handleLike = () => {
    const dataObject = {
      ...blog,
      likes: blog.likes + 1
    }
    dispatch(likeBlog(dataObject))
  }

  if (blog) {
    // console.log('number of comments', blog.comments.length)
    return (
      <div>
        <h2>{blog.title}</h2>
        <Form>
          <Button variant="primary" onClick={() => dispatch(deleteById(blog.id))}>
          delete
          </Button>
          <div>url: {blog.url}</div>
          <Form.Group>
            likes: {blog.likes}
            <Button variant="primary" type="button" onClick={handleLike}>like</Button>
          </Form.Group>
        </Form>
        added by {blog.user.name}
        <CommentForm blog={blog} />
        <CommentsList comments={blog.comments} />
      </div>
    )
  }
  return null
}

export default BlogView