import React from 'react';
import {Col, Row} from "react-bootstrap";
import AuthorList from "./AuthorList";
import CreateAuthor from "./CreateAuthor";
import AuthorForm from "./AuthorForm";

const AuthorSection:React.FC = () => {
    return(
        <React.Fragment>
            <Row>
                <Col>
                    <h2>Authors</h2>
                    <hr className="author-title mt-1 mb-4"/>
                </Col>
            </Row>
            <AuthorList/>
            <CreateAuthor/>
            <AuthorForm/>
        </React.Fragment>
    )
};
export default AuthorSection;
