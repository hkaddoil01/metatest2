import { render } from '@redwoodjs/testing/web'

import ContentPage from './ContentPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ContentPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContentPage />)
    }).not.toThrow()
  })
})
