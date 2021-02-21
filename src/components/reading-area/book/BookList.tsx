import React from "react";
import Book from "./Book";
import {IBook} from "../../../types/libraryTypes";

type BookListProps = {
    myBooks: IBook[],
    onDeleted: (index: number) => void
}

const BookList: React.FC<BookListProps> = (props) => {

    const {myBooks} = props;

    const renderBooks = () => {
        if(myBooks.length === 0){
            return(
                <p>No books listed</p>
            );
        }
        return myBooks.map((currentBook: IBook, indexNo: number) => {
            return (<Book myBook={currentBook} key={indexNo} index={indexNo}  onDeleteBook={props.onDeleted}/>)
        });
    };

    return (
        <React.Fragment>
            {renderBooks()}
        </React.Fragment>
    )
};
export default BookList;
