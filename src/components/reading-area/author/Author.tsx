import React from 'react';
import {Col, Row} from "react-bootstrap";

const Author: React.FC = () => {
    return(
        <Row className="author-details py-1">
            <Col xs={9}>
               <label>1.Author 1</label>
            </Col>
            <Col xs={3} className="text-right">
                <i className="feather icon-edit text-warning mr-3" />
                <i className="feather icon-trash-2 text-danger mr-5"/>
            </Col>
        </Row>
    )
};
export default Author;
