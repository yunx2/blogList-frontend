import React, { useState } from 'react';

import { addComment } from '../reducers/blogsReducer';

const CommentForm = id => {
  return (
    <form>
      <h2>add comment</h2>
      <input type="text" />
      <button type="submit">submit comment</button>
    </form>
  )
}

export default CommentForm;
