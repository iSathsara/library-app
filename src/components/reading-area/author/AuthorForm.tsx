import React from 'react';
import {Col, Row, Form, Button} from "react-bootstrap";


const AuthorForm:React.FC = () => {


    return(
        <Row>
           <Col xs={12} md={9} className="author-form py-5">
              <Row>
                 <Col xs={12}>
                     <label className="create-author-title">Create Author</label>
                     <i className="feather icon-x-circle float-right mt-1" />
                 </Col>
              </Row>

              <Row>
                  <Col xs={12} lg={{span:11, offset:1}} className="author-input mt-5 align-content-end">
                      <Form.Label className="author-form-label">Name of Author</Form.Label>
                      <Form.Control size="sm" type="text"/>
                      <Button type="submit"
                              className="create-author-btn float-right mt-4 px-4 py-1"> Create
                      </Button>
                  </Col>
              </Row>
           </Col>
        </Row>
    )
};
export default AuthorForm;
