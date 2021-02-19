import React, {FormEvent, useState} from 'react';
import {Col, Row, Form, Button} from "react-bootstrap";
import CreatableSelect from 'react-select/creatable';
import {IBook} from "../../../types/libraryTypes";

type BookFormProps = {
    onClickClose: () => void
    onBookAdded: (book: IBook) => void
};

const BookForm:React.FC<BookFormProps> = (props) => {

    //------- styling react-select -----------------------------
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    const customStyles = {
        control: (base: any) => ({
            ...base,
            height: 30,
            minHeight: 15
        })
    };

    //---------------------------------------------------------
    // Add book part ------------------------------------------

    const [bookTitle, setBookTitle] = useState<string | null>(null);
    const [bookIsbn, setBookIsbn] = useState<string | null>(null);

    const handleSetBookTitle = (title: string) => {
      setBookTitle(title);
    };

    const handleSetBookIsbn = (isbn: string) => {
        setBookIsbn(isbn);
    };

    const handleCreateBook = (e:FormEvent) => {
        e.preventDefault();
        if(bookTitle == null || bookIsbn == null){
            return
        }
        const newBook:IBook = {title: bookTitle, isbn: bookIsbn};
        props.onBookAdded(newBook);
    };

    //---------------------------------------------------------


    return(
        <Row>
           <Col xs={12} md={9} className="book-form py-5">
              <Row>
                 <Col xs={12}>
                     <label className="create-book-title">Create Book</label>
                     <i className="feather icon-x-circle float-right mt-1" onClick={props.onClickClose}/>
                 </Col>
              </Row>

              <form onSubmit={handleCreateBook}>
                  <Row>
                      <Col xs={12} lg={{span:11, offset:1}} className="book-input mt-5 align-content-end">

                          <Form.Label className="book-title-label">Title of the Book</Form.Label>
                          <Form.Control size="sm"
                                        type="text"
                                        value={bookTitle ? bookTitle : ''}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            handleSetBookTitle(event.target.value);
                                        }}
                          />

                          <Form.Label className="book-title-label">ISBN</Form.Label>
                          <Form.Control size="sm"
                                        type="text"
                                        value={bookIsbn ? bookIsbn : ''}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            handleSetBookIsbn(event.target.value)
                                        }}
                          />

                          <Form.Label className="book-title-label">Author</Form.Label>
                          <CreatableSelect className="authors-list"
                              isClearable
                              //onChange={}
                              //onInputChange={}
                              options={options}
                              styles={customStyles}
                          />

                          <Button type="submit"
                                  className="create-book-btn float-right mt-4 px-4 py-1"> Create
                          </Button>
                      </Col>
                  </Row>
              </form>

           </Col>
        </Row>
    )
};
export default BookForm;
