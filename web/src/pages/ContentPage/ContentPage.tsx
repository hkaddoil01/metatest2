import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ContentPage = () => {
  return (
    <>
      <MetaTags title="Content" description="Content page" />

      <h1>ContentPage</h1>
      <p>
        Find me in <code>./web/src/pages/ContentPage/ContentPage.tsx</code>
      </p>
      <p>
        My default route is named <code>content</code>, link to me with `
        <Link to={routes.content()}>Content</Link>`
      </p>
    </>
  )
}

export default ContentPage
