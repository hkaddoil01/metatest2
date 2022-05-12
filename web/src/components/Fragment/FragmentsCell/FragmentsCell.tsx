import type { FindFragments } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Fragments from 'src/components/Fragment/Fragments'

export const QUERY = gql`
  query FindFragments {
    fragments {
      id
      title
      body
      fragmentTime
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No fragments yet. '}
      <Link
        to={routes.newFragment()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fragments }: CellSuccessProps<FindFragments>) => {
  return <Fragments fragments={fragments} />
}
