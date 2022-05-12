import type { FindFragmentById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Fragment from 'src/components/Fragment/Fragment'

export const QUERY = gql`
  query FindFragmentById($id: Int!) {
    fragment: fragment(id: $id) {
      id
      title
      body
      fragmentTime
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Fragment not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fragment }: CellSuccessProps<FindFragmentById>) => {
  return <Fragment fragment={fragment} />
}
