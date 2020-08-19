import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Togglable from './Togglable'

describe('Togglable component', () => {
  let togglableComponent

  beforeEach(() => {
    togglableComponent = render(
      <Togglable buttonLabel="view...">
        <div className="testDiv"/>
      </Togglable>
    )
  })

  test('renders children', () => {
    expect(
      togglableComponent.container.querySelector('.testDiv')
    ).toBeDefined()
  })

  test('initially, children are hidden', () => {
    const div = togglableComponent.container.querySelector('.togglableContent')
    expect(div).toHaveStyle('display: none')
  })

  test('after clicking buttonLabel button, children are displayed', () => {
    const toggleButton = togglableComponent.getByText('view...')
    fireEvent.click(toggleButton)

    const div = togglableComponent.container.querySelector('.togglableContent')
    expect(div).not.toHaveStyle('display: none')
  })
})