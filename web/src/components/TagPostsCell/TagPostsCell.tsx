import type { TagPostsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Tags from 'src/components/Tag/Tags'
import TagPosts from 'src/components/TagPosts/TagPosts'
import NewPost from 'src/components/Post/NewPost/NewPost'

export const QUERY = gql`
  query TagPostsQuery {
    tagPosts: tags {
      id
      type
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ tagPosts }: CellSuccessProps<TagPostsQuery>) => {
  return (<TagPosts tagPosts={tagPosts} />
  )
}
