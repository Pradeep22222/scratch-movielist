import React from 'react'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
export const SearchForm = () => {
  return (
    <div>
      <Form className="mt-5">
              <Row>
                  <Col></Col>
          <Col>
            <Form.Control placeholder="Enter Movie" className="text-center" />
          </Col>
          <Col>
           <Button variant="success">Search</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
