import {gql} from '@apollo/client';

const getBooks = gql`
  query getBooksQuery{
    books {
        id
        name 
    }
  }
`
const getSingleBook = gql`
	query getSingleBookQuery($id: ID!) {
		book(id: $id) {
			id
			name
			genre
			author {
				id
				name
				age
				book {
					id
					name
				}
			}
		}
	}
    `
export {getBooks, getSingleBook}