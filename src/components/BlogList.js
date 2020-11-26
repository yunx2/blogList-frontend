import React from 'react'
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import Blog from './Blog'

const BlogList = () => {
  const blogs = useSelector(state => state.blogs)
  return (
    <div>
      <h2>favorites</h2>
      <Table striped>
        <tbody>
          {blogs.map((blog) => <Blog key={blog.id} id={blog.id}  />)}
        </tbody>
      </Table>

    </div>
  )
}

export default BlogList