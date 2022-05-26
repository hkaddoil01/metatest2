import {CreateMediaFileInput} from 'src/graphql/mediaFiles.sdl'
import {CreateTagInput} from 'src/graphql/tags.sdl'

export const schema = gql`
  type Post {
    id: Int!
    title: String!
    author: String!
    body: String!
    mfile: MediaFile
    tags: [Tag]!
    published: Boolean!
    createdAt: DateTime!
    publisheddAt: DateTime
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostMediaFile {
    create: CreateMediaFileInputWithoutPostId
  }

  input CreateOrConnectPostTags {
    connectOrCreate: [CreateOrConnectPostTagsInput]
  }

  input CreatePostInput {
    title: String!
    author: String!
    body: String!
    published: Boolean!
    publisheddAt: DateTime
    mfile: CreatePostMediaFile
    tags: CreateOrConnectPostTags
  }

  input UpdatePostInput {
    title: String
    author: String
    body: String
    published: Boolean
    publisheddAt: DateTime
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
