import type { EditFragmentById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import FragmentForm from 'src/components/Fragment/FragmentForm'

export const QUERY = gql`
  query EditFragmentById($id: Int!) {
    fragment: fragment(id: $id) {
      id
      title
      body
      fragmentTime
      createdAt
    }
  }
`
const UPDATE_FRAGMENT_MUTATION = gql`
  mutation UpdateFragmentMutation($id: Int!, $input: UpdateFragmentInput!) {
    updateFragment(id: $id, input: $input) {
      id
      title
      body
      fragmentTime
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fragment }: CellSuccessProps<EditFragmentById>) => {
  const [updateFragment, { loading, error }] = useMutation(UPDATE_FRAGMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Fragment updated')
      navigate(routes.fragments())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateFragment({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Fragment {fragment.id}</h2>
      </header>
      <div className="rw-segment-main">
        <FragmentForm fragment={fragment} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
