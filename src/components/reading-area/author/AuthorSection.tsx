import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AuthorList from "./AuthorList";

const AuthorSection:React.FC = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <h2>Authors</h2>
                    <hr className="author-title mt-1 mb-4"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AuthorList/>
                </Col>
            </Row>
        </Container>
    )
};
export default AuthorSection;
