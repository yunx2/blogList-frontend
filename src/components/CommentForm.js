import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import { addComment } from '../reducers/blogsReducer';

const CommentForm = ({ blog }) => {
  // call useDispatch hook here at top level of component instead of inside handleSubmit where the action is dispatched because hooks cannot be called inside nested functions (or inside loops, or conditions)
  const dispatch = useDispatch();

  // local state
  const [comment, setComment] = useState('');

  // onClick handler
  const handleSubmit = e => {
    e.preventDefault();

    const updatedBlog = {
      ...blog,
      comments: blog.comments.concat(comment)
    }

    try {
      dispatch(addComment(updatedBlog));
      console.log('comment successfully added')
    } catch (exception) {
      console.log('not working');
    }
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h2>add a comment</h2>
        <Form.Control type="text" onChange={e => setComment(e.target.value)} />
        <Button variant="primary" type="submit">submit comment</Button>
      </Form>
    </div>
  )
}

export default CommentForm;
