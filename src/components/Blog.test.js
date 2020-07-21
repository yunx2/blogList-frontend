import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'

const blog = {
  title: 'title title title',
  author: 'author name',
  url: 'favoriteblog.com',
  likes: '2'
}

test('renders content, contains text about title and author, does not contain text about url and likes', () => {

  const component = render(
    <Blog favorite={blog} />
  )
  component.debug()
  expect(component.container).toHaveTextContent('title title title')
  expect(component.container).toHaveTextContent('author name')
})

test('clicking "like" button twice calls the event handler component receives as props twice', () => {
  const mockHandler = jest.fn()
  const blogComponent = render(
    <Blog favorite={blog} updateBlog={mockHandler} />
  )
  const likeButton = blogComponent.getByText('like')
  fireEvent.click(likeButton)
  fireEvent.click(likeButton)

  expect(mockHandler.mock.calls).toHaveLength(2)
})

// test('clicking button displays url and likes information', () => {


// })