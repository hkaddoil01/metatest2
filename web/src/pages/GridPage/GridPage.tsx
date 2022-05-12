import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GridPage = () => {
  return (
    <>
      <MetaTags title="Grid" description="Grid page" />

      <h1>GridPage</h1>
      <p>
        Find me in <code>./web/src/pages/GridPage/GridPage.tsx</code>
      </p>
      <p>
        My default route is named <code>grid</code>, link to me with `
        <Link to={routes.grid()}>Grid</Link>`
      </p>
    </>
  )
}

export default GridPage
