import { Transition } from '@headlessui/react'
import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <a href="/">Home</a>
            </td>
            <td>
              <a href="/grid">Grid Page</a>
            </td>
            <td>
              <a href="/content">Content Page</a>
            </td>
            <td>
              <a href="/timeline">Timeline Page</a>
            </td>
            <td>
              <a href="/upload">Upload Page</a>
            </td>
            <td>
              <a href="/profile">Profile Page</a>
            </td>
            <td>
              <a href="/about">About Page</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
