import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Post/PostsCell'

import {TagTypeNames} from 'src/components/Taginput/Taginput'

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
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

const listTag = (tags) => {
  console.log("*** listTag - ", tags)
  if (!tags)
     return (
      <>
      </>
    )

  return tags.map((ele) => {
    //var name_parts = ele.name.split("|")
    //console.log("*** listTag - ele.name", ele.name)
    //console.log("*** listTag - name_parts = ", name_parts)
    return (
      <span className="tag-item" key={ele.id}>
        <span className={"tag-type " + ele.type}>{TagTypeNames[ele.type]}</span>
        <span className="tag-value">{ele.name}</span>
      </span>
    )
  })
}

const PostsList = ({ posts }) => {
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post deleted')
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
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Body</th>
            <th>Url</th>
            <th>Published</th>
            <th>Created at</th>
            <th>Publishedd at</th>
            <th>Tags</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{truncate(post.id)}</td>
              <td>{truncate(post.title)}</td>
              <td>{truncate(post.author)}</td>
              <td>{truncate(post.body)}</td>
              <td>
                <a href={post.mfile.url} target="_blank">
                  <img src={thumbnail(post.mfile.url)} style={{ maxWidth: '50px' }} />
                </a>

              </td>
              <td>{checkboxInputTag(post.published)}</td>
              <td>{timeTag(post.createdAt)}</td>
              <td>{timeTag(post.publisheddAt)}</td>
              <td>{listTag(post.tags)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.post({ id: post.id })}
                    title={'Show post ' + post.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPost({ id: post.id })}
                    title={'Edit post ' + post.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete post ' + post.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(post.id)}
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

export default PostsList
