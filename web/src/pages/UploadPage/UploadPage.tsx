import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const UploadPage = () => {
  return (
    <>
      <MetaTags title="Upload" description="Upload page" />

      <h1>UploadPage</h1>
      <p>
        Find me in <code>./web/src/pages/UploadPage/UploadPage.tsx</code>
      </p>
      <p>
        My default route is named <code>upload</code>, link to me with `
        <Link to={routes.upload()}>Upload</Link>`
      </p>
    </>
  )
}

export default UploadPage
