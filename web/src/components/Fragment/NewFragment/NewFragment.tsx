import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import FragmentForm from 'src/components/Fragment/FragmentForm'

const CREATE_FRAGMENT_MUTATION = gql`
  mutation CreateFragmentMutation($input: CreateFragmentInput!) {
    createFragment(input: $input) {
      id
    }
  }
`

const NewFragment = () => {
  const [createFragment, { loading, error }] = useMutation(CREATE_FRAGMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Fragment created')
      navigate(routes.fragments())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createFragment({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Fragment</h2>
      </header>
      <div className="rw-segment-main">
        <FragmentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFragment
