import React from "react";
import {Col, Row} from "react-bootstrap";
import {IBook} from "../../../types/libraryTypes";

type BookProps = {
    myBook: IBook
    index: number
    onDeleteBook: (index: number) => void
}

const Book: React.FC<BookProps> = (props) => {

    const {myBook, index, onDeleteBook} = props;

    return (
        <Row className="book-details my-1 py-1 mx-0">
            <Col xs={9} className="px-0">
                <label>{myBook.title + " " + myBook.isbn}</label>
            </Col>
            <Col xs={3} className="text-right">
                <i className="feather icon-edit text-warning mr-3"/>
                <i className="feather icon-trash-2 text-danger mr-1"
                   onClick={() => onDeleteBook(index)}
                />
            </Col>
        </Row>
    )
};
export default Book;
