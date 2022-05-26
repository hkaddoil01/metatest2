import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/MediaFile/MediaFilesCell'

const DELETE_MEDIA_FILE_MUTATION = gql`
  mutation DeleteMediaFileMutation($id: Int!) {
    deleteMediaFile(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const thumbnail = (url) => {
  const parts = url.split('/')
  parts.splice(3, 0, 'resize=width:100')
  return parts.join('/')
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const MediaFilesList = ({ mediaFiles }) => {
  const [deleteMediaFile] = useMutation(DELETE_MEDIA_FILE_MUTATION, {
    onCompleted: () => {
      toast.success('MediaFile deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete mediaFile ' + id + '?')) {
      deleteMediaFile({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Url</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {mediaFiles.map((mediaFile) => (
            <tr key={mediaFile.id}>
              <td>{truncate(mediaFile.id)}</td>
              <td>{truncate(mediaFile.title)}</td>
              <td>
                <a href={mediaFile.url} target="_blank">
                  <img src={thumbnail(mediaFile.url)} style={{ maxWidth: '50px' }} />
                </a>

              </td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.mediaFile({ id: mediaFile.id })}
                    title={'Show mediaFile ' + mediaFile.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMediaFile({ id: mediaFile.id })}
                    title={'Edit mediaFile ' + mediaFile.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete mediaFile ' + mediaFile.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(mediaFile.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MediaFilesList
