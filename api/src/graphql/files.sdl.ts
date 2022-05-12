export const schema = gql`
  type File {
    id: Int!
    url: String!
    filetype: String!
    fragment: Fragment
    fragmentId: Int
  }

  type Query {
    files: [File!]! @requireAuth
    file(id: Int!): File @requireAuth
  }

  input CreateFileInput {
    url: String!
    filetype: String!
    fragmentId: Int
  }

  input UpdateFileInput {
    url: String
    filetype: String
    fragmentId: Int
  }

  type Mutation {
    createFile(input: CreateFileInput!): File! @requireAuth
    updateFile(id: Int!, input: UpdateFileInput!): File! @requireAuth
    deleteFile(id: Int!): File! @requireAuth
  }
`
