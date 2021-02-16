import React from 'react';
import {Col, Row} from "react-bootstrap";
import BookList from "./BookList";
import CreateBook from "./CreateBook";
import BookForm from "./BookForm";

const BookSection:React.FC = () => {
    return(
        <React.Fragment>
            <Row>
                <Col>
                    <h2 className="book-title">Books</h2>
                </Col>
            </Row>
            <BookList/>
            <CreateBook/>
            <BookForm/>
        </React.Fragment>
    )
};
export default BookSection;
