import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import BookList from "./BookList";
import CreateBook from "./CreateBook";
import BookForm from "./BookForm";
import {IBook} from "../../../types/libraryTypes";

const BookSection: React.FC = () => {

    const [isVisible, setVisible] = useState(false);

    const initialBook: IBook[] = [{title: "isuru's book", isbn: "isbn007"},
        {title: "sathsara's book", isbn: "isbn008"},
        {title: "jayasumana's book", isbn: "isbn009"},
    ];

    const [book, setBook] = useState<IBook[]>(initialBook);

    const handleOnClickCreate = () => {
        setVisible(true);
    };

    const handleOnClickClose = () => {
        setVisible(false);
    };

    const handleOnAddBook = (newBook: IBook) => {
        const allBooks: IBook[] = book.slice();
        allBooks.push(newBook);
        setBook(allBooks);
    };

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h2 className="book-title">Books</h2>
                </Col>
            </Row>
            <BookList myBooks={book}/>
            <CreateBook onClickCreate={handleOnClickCreate}/>
            {isVisible && <BookForm onClickClose={handleOnClickClose} onBookAdded={handleOnAddBook}/>}
        </React.Fragment>
    )
};
export default BookSection;
