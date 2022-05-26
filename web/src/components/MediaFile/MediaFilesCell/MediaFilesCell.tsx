import type { FindMediaFiles } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import MediaFiles from 'src/components/MediaFile/MediaFiles'

export const QUERY = gql`
  query FindMediaFiles {
    mediaFiles {
      id
      title
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No mediaFiles yet. '}
      <Link
        to={routes.newMediaFile()}
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

export const Success = ({ mediaFiles }: CellSuccessProps<FindMediaFiles>) => {
  return <MediaFiles mediaFiles={mediaFiles} />
}
