import { render } from '@redwoodjs/testing/web'

import TimelineLayout from './TimelineLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TimelineLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TimelineLayout />)
    }).not.toThrow()
  })
})
