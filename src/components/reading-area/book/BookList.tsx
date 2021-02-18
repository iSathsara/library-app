import React from "react";
import Book from "./Book";
import {IBook} from "../../../types/libraryTypes";

type BookListProps = {
    myBooks: IBook[],
}

const BookList: React.FC<BookListProps> = (props) => {

    const {myBooks} = props;

    const renderBooks = () => {
        return myBooks.map((currentBook: IBook, indexNo: number) => {
            return <Book myBook={currentBook} key={indexNo}/>
        });
    };

    return (
        <React.Fragment>
            {renderBooks()}
        </React.Fragment>
    )
};
export default BookList;
