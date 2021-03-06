import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import NewPost from 'src/components/Post/NewPost'
import TagPostsStories from 'src/components/TagPosts/TagPosts.stories'
import TagPostsCell from 'src/components/TagPostsCell/TagPostsCell'


const UploadPage = () => {
  return (
    <>
      <MetaTags title="Upload" description="Upload page" />

      <h1>UploadPage</h1>
      <TagPostsCell />
    </>
  )
}

export default UploadPage
