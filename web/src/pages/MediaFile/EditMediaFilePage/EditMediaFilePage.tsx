import EditMediaFileCell from 'src/components/MediaFile/EditMediaFileCell'

type MediaFilePageProps = {
  id: number
}

const EditMediaFilePage = ({ id }: MediaFilePageProps) => {
  return <EditMediaFileCell id={id} />
}

export default EditMediaFilePage
