import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('renders content, contains text about title and author, does not contain text about url and likes', () => {
  const blog = {
    title: 'title title title',
    author: 'author name',
    url: 'favoriteblog.com',
    likes: '2'
  }
  const component = render(
    <Blog blog={blog} />
  )
  component.debug()
  expect(component.container).toHaveTextContent('title title title')
  expect(component.container).toHaveTextContent('author name')
  expect(component.container).not.toHaveTextContent('.com')
  expect(component.container).not.toHaveTextContent('2')
})