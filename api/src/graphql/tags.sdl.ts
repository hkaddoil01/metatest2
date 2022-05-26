export const schema = gql`
  type Tag {
    id: Int!
    type: TagType!
    name: String!
    posts: [Post]!
  }

  enum TagType {
    CHARACTER
    EVENT
    PLACE
    OTHER
  }

  type Query {
    tags: [Tag!]! @requireAuth
    tag(id: Int!): Tag @requireAuth
  }

  input CreateTagInput {
    type: TagType!
    name: String!
  }

  input CreateOrConnectPostTagsWhereInput {
    name: String!
  }

  input CreateOrConnectPostTagsCreateInput {
    type: TagType!
    name: String!
  }

  input CreateOrConnectPostTagsInput {
    where:  CreateOrConnectPostTagsWhereInput!
    create: CreateOrConnectPostTagsCreateInput!
  }

  input UpdateTagInput {
    type: TagType
    name: String
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag! @requireAuth
    updateTag(id: Int!, input: UpdateTagInput!): Tag! @requireAuth
    deleteTag(id: Int!): Tag! @requireAuth
  }
`
