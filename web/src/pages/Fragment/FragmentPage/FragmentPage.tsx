import FragmentCell from 'src/components/Fragment/FragmentCell'

type FragmentPageProps = {
  id: number
}

const FragmentPage = ({ id }: FragmentPageProps) => {
  return <FragmentCell id={id} />
}

export default FragmentPage
