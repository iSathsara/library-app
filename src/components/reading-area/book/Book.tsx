import React from "react";
import {Col, Row} from "react-bootstrap";

const Book : React.FC = () => {

    return(
        <Row className="book-details my-2 pt-2 mx-0">
            <Col xs={9} className="px-0">
                <label>1.Book 1</label>
            </Col>
            <Col xs={3} className="text-right">
                <i className="feather icon-edit text-warning mr-3" />
                <i className="feather icon-trash-2 text-danger mr-1"/>
            </Col>
        </Row>
    )
};
export default Book;
