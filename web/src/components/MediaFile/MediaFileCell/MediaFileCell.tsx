import type { FindMediaFileById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import MediaFile from 'src/components/MediaFile/MediaFile'

export const QUERY = gql`
  query FindMediaFileById($id: Int!) {
    mediaFile: mediaFile(id: $id) {
      id
      title
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>MediaFile not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ mediaFile }: CellSuccessProps<FindMediaFileById>) => {
  return <MediaFile mediaFile={mediaFile} />
}
