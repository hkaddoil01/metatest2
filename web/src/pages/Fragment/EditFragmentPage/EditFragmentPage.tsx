import EditFragmentCell from 'src/components/Fragment/EditFragmentCell'

type FragmentPageProps = {
  id: number
}

const EditFragmentPage = ({ id }: FragmentPageProps) => {
  return <EditFragmentCell id={id} />
}

export default EditFragmentPage
