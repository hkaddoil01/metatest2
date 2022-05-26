import MediaFileCell from 'src/components/MediaFile/MediaFileCell'

type MediaFilePageProps = {
  id: number
}

const MediaFilePage = ({ id }: MediaFilePageProps) => {
  return <MediaFileCell id={id} />
}

export default MediaFilePage
