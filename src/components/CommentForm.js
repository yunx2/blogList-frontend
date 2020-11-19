import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addComment } from '../reducers/blogsReducer';

const CommentForm = blog => {
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
    <form>
      <h2>add comment</h2>
      <input type="text" onChange={e => setComment(e.target.value)} />
      <button type="submit">submit comment</button>
    </form>
  )
}

export default CommentForm;
