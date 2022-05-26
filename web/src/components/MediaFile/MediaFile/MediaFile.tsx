import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_MEDIA_FILE_MUTATION = gql`
  mutation DeleteMediaFileMutation($id: Int!) {
    deleteMediaFile(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const MediaFile = ({ mediaFile }) => {
  const [deleteMediaFile] = useMutation(DELETE_MEDIA_FILE_MUTATION, {
    onCompleted: () => {
      toast.success('MediaFile deleted')
      navigate(routes.mediaFiles())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete mediaFile ' + id + '?')) {
      deleteMediaFile({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">MediaFile {mediaFile.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{mediaFile.id}</td>
            </tr><tr>
              <th>Title</th>
              <td>{mediaFile.title}</td>
            </tr><tr>
              <th>Url</th>
              <td>{mediaFile.url}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMediaFile({ id: mediaFile.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(mediaFile.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default MediaFile
