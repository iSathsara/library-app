import React from 'react';
import {Col, Row} from "react-bootstrap";
import AuthorSection from "./author/AuthorSection";
import BookSection from "./book/BookSection";

const ReadingArea:React.FC = () => {
    return(

        <Row>
            <Col xs={12} md={6} className="books"><BookSection/></Col>
            <Col xs={12} md={6} className="authors"><AuthorSection/></Col>
        </Row>
    )
};
export default ReadingArea;
