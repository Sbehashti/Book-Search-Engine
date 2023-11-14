import { gql } from '@apollo/client';
export const QUERY_ME = gql`
query me {
  me {
    _id
    bookCount
    savedBooks {
      bookId
      _id
      title
      authors
      description
      image
      link
    }
  }
}
`;