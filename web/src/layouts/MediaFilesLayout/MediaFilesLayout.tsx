import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type MediaFileLayoutProps = {
  children: React.ReactNode
}

const MediaFilesLayout = ({ children }: MediaFileLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.mediaFiles()}
            className="rw-link"
          >
            MediaFiles
          </Link>
        </h1>
        <Link
          to={routes.newMediaFile()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New MediaFile
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default MediaFilesLayout
