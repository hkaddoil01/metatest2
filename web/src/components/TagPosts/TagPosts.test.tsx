import { render } from '@redwoodjs/testing/web'

import TagPosts from './TagPosts'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TagPosts', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TagPosts />)
    }).not.toThrow()
  })
})
