import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useMutation, useQuery } from "@apollo/client";
import { getAuthors, getBooks } from "../graphql-client/queries";
import { addSingleBook } from "../graphql-client/mutations";

export default function Forms() {
  const [newBook, setNewBook] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  const {name, genre, authorId} = newBook
  const onInputChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addBook({
      variables: {name,genre,authorId},
      refetchQueries: [{query: getBooks}]
    })
    setNewBook({name: "",
    genre: "",
    authorId: "",})
  };

  //GRAPHQL OPERATIONS
  const { loading, error, data } = useQuery(getAuthors);

  const [addBook,dataMutation] = useMutation(addSingleBook)
  return (
    <Row>
      <Col>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Book name"
              name="name"
              onChange={onInputChange}
              value={name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Book genre"
              name="genre"
              onChange={onInputChange}
              value={genre}
            />
          </Form.Group>
          <Form.Group>
            {loading ? (
              <p>Loading authors..</p>
            ) : (
              <Form.Control
                as="select"
                name="authorId"
                onChange={onInputChange}
                value={authorId}
              >
                <option value='' disabled>Select author</option>
                {data.authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
              </Form.Control>
            )}
          </Form.Group>
          <Button className="float-right" varian="info" type="submit">
            Add Book
          </Button>
        </Form>
      </Col>
      <Col>
        <Form>
          <Form.Group className="invisible">
            <Form.Control />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Author name" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="number" placeholder="Author age" />
          </Form.Group>
          <Button className="float-right" varian="info" type="submit">
            Add Author
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
