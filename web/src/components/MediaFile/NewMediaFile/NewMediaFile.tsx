import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import MediaFileForm from 'src/components/MediaFile/MediaFileForm'

const CREATE_MEDIA_FILE_MUTATION = gql`
  mutation CreateMediaFileMutation($input: CreateMediaFileInput!) {
    createMediaFile(input: $input) {
      id
    }
  }
`

const NewMediaFile = () => {
  const [createMediaFile, { loading, error }] = useMutation(CREATE_MEDIA_FILE_MUTATION, {
    onCompleted: () => {
      toast.success('MediaFile created')
      navigate(routes.mediaFiles())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createMediaFile({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New MediaFile</h2>
      </header>
      <div className="rw-segment-main">
        <MediaFileForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMediaFile
