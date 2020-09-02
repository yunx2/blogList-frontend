import React from 'react'

const CommentsList = () => {
  const comments = ['awesome article', 'this is the best', 'i love this blog']
  return (
    <div>
      <h2>comments</h2>
      <ul>
        {comments.map((comment, i) => <li key={i} >{comment}</li>
        )}
      </ul>
    </div>
  )
}

export default CommentsList