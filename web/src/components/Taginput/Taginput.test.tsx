import { render } from '@redwoodjs/testing/web'

import Taginput from './Taginput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Taginput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Taginput />)
    }).not.toThrow()
  })
})
