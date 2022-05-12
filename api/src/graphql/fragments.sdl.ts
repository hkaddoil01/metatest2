export const schema = gql`
  type Fragment {
    id: Int!
    title: String!
    body: String!
    fragmentTime: String!
    attachments: [File]!
    createdAt: DateTime!
  }

  type Query {
    fragments: [Fragment!]! @requireAuth
    fragment(id: Int!): Fragment @requireAuth
  }

  input CreateFragmentInput {
    title: String!
    body: String!
    fragmentTime: String!
  }

  input UpdateFragmentInput {
    title: String
    body: String
    fragmentTime: String
  }

  type Mutation {
    createFragment(input: CreateFragmentInput!): Fragment! @requireAuth
    updateFragment(id: Int!, input: UpdateFragmentInput!): Fragment!
      @requireAuth
    deleteFragment(id: Int!): Fragment! @requireAuth
  }
`
