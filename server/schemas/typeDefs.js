const typeDefs = `
type User {
  _id: ID
  username: String
  email: String
  password: String
  bookCount: Int
  savedBooks: [Book]
}
type Book {
  _id: ID
  authors: [String]
  description: String!
  bookId: String!
  image: String
  link: String
  title: String!
}
input SavedBookInput {
  authors: [String]
  description: String!
  bookId: String!
  image: String
  link: String
  title: String!
}
type Query {
  me: User
}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(book: SavedBookInput!): User
  removeBook(bookId: String!): User
}
type Auth {
  token: ID!
  user: User
}`;
module.exports = typeDefs;