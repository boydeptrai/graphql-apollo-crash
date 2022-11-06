import React from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useQuery } from "@apollo/client";
import { getAuthors } from "../graphql-client/queries";

export default function Forms() {
  const { loading, error, data } = useQuery(getAuthors);
  return (
    <Row>
      <Col>
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Book name" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Book genre" />
          </Form.Group>
          <Form.Group>
            {loading ? (
              <p>Loading authors..</p>
            ) : (
              <Form.Control as="select" defaultValue="Select author">
                <option disabled>Select author</option>
                {data.authors.map(author =>(
                    <option key={author.id} value={author.id}>{author.name}</option>
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
