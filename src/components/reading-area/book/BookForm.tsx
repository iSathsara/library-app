import React from 'react';
import {Col, Row, Form, Button} from "react-bootstrap";

const BookForm:React.FC = () => {


    return(
        <Row>
           <Col xs={12} md={9} className="book-form py-5">
              <Row>
                 <Col xs={12}>
                     <label className="create-book-title">Create Book</label>
                     <i className="feather icon-x-circle float-right mt-1" />
                 </Col>
              </Row>

              <Row>
                  <Col xs={12} lg={{span:11, offset:1}} className="book-input mt-5 align-content-end">

                      <Form.Label className="book-title-label">Title of the Book</Form.Label>
                      <Form.Control size="sm" type="text"/>

                      <Form.Label className="book-title-label">ISBN</Form.Label>
                      <Form.Control size="sm" type="text"/>

                      <Button type="submit"
                              className="create-book-btn float-right mt-4 px-4 py-1"> Create
                      </Button>
                  </Col>
              </Row>
           </Col>
        </Row>
    )
};
export default BookForm;
