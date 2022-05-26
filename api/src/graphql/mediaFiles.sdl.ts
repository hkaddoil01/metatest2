export const schema = gql`
  type MediaFile {
    id: Int!
    title: String!
    url: String!
    post: Post!
    postId: Int!
  }

  type Query {
    mediaFiles: [MediaFile!]! @requireAuth
    mediaFile(id: Int!): MediaFile @requireAuth
  }

  input CreateMediaFileInput {
    title: String!
    url: String!
    postId: Int!
  }

  input CreateMediaFileInputWithoutPostId {
    title: String!
    url: String!
  }

  input UpdateMediaFileInput {
    title: String
    url: String
    postId: Int
  }

  type Mutation {
    createMediaFile(input: CreateMediaFileInput!): MediaFile! @requireAuth
    updateMediaFile(id: Int!, input: UpdateMediaFileInput!): MediaFile!
      @requireAuth
    deleteMediaFile(id: Int!): MediaFile! @requireAuth
  }
`
