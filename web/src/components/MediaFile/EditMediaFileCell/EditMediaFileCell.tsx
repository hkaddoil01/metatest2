import type { EditMediaFileById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import MediaFileForm from 'src/components/MediaFile/MediaFileForm'

export const QUERY = gql`
  query EditMediaFileById($id: Int!) {
    mediaFile: mediaFile(id: $id) {
      id
      title
      url
    }
  }
`
const UPDATE_MEDIA_FILE_MUTATION = gql`
  mutation UpdateMediaFileMutation($id: Int!, $input: UpdateMediaFileInput!) {
    updateMediaFile(id: $id, input: $input) {
      id
      title
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ mediaFile }: CellSuccessProps<EditMediaFileById>) => {
  const [updateMediaFile, { loading, error }] = useMutation(UPDATE_MEDIA_FILE_MUTATION, {
    onCompleted: () => {
      toast.success('MediaFile updated')
      navigate(routes.mediaFiles())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateMediaFile({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit MediaFile {mediaFile.id}</h2>
      </header>
      <div className="rw-segment-main">
        <MediaFileForm mediaFile={mediaFile} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
