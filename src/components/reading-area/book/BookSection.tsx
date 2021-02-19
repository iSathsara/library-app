import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import BookList from "./BookList";
import CreateBook from "./CreateBook";
import BookForm from "./BookForm";
import {IBook} from "../../../types/libraryTypes";

const BookSection: React.FC = () => {

    const [isVisible, setVisible] = useState(false);

    const initialBook: IBook[] = [];

    const [book, setBook] = useState<IBook[]>(initialBook);

    // toggle form visibility --------------------------------
    const handleOnClickCreate = () => {
        setVisible(true);
    };

    const handleOnClickClose = () => {
        setVisible(false);
    };

    // add book handler --------------------------------------
    const handleOnAddBook = (newBook: IBook) => {
        const allBooks: IBook[] = book.slice();
        allBooks.push(newBook);
        setBook(allBooks);
    };

    // delete book handler -----------------------------------
    const handleDeleteBook = (index: number) => {
        const allBooks: IBook[] = book.slice();
        allBooks.splice(index,1);
        setBook(allBooks);
    };

    return (
        <React.Fragment>
            <Row>
                <Col className="pb-3">
                    <h2 className="book-title">Books</h2>
                </Col>
            </Row>
            <BookList myBooks={book} onDeleted={handleDeleteBook}/>
            <CreateBook onClickCreate={handleOnClickCreate}/>
            {isVisible && <BookForm onClickClose={handleOnClickClose} onBookAdded={handleOnAddBook}/>}
        </React.Fragment>
    )
};
export default BookSection;
