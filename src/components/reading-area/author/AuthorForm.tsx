import React, {FormEvent, useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {IAuthor} from "../../../types/libraryTypes";

type AuthorFormProps = {
    onClickClose: () => void,
    onAuthorAdded: (author: IAuthor) => void
    authorToUpdate: IAuthor | null
    onAuthorUpdated: (updatedAuthor: IAuthor, index: number) => void
    updatedAuthorIndex: number | null
};

const AuthorForm: React.FC<AuthorFormProps> = (props) => {

    const {authorToUpdate, onAuthorUpdated, updatedAuthorIndex} = props;

    // author's add section --------------------------------------------------------
    const [authorName, setAuthorName] = useState<string | null>(null);

    const handleSetAuthorName = (name: string) => {
        setAuthorName(name);
    };

    const handleCreateAuthor = (e: FormEvent) => {
        e.preventDefault();
        if (!authorName) {
            return
        }

        if (authorToUpdate && updatedAuthorIndex !== null) {
            onAuthorUpdated({...authorToUpdate, name: authorName}, updatedAuthorIndex);
            setAuthorName(null);
            return;
        }

        const newAuthor: IAuthor = {name: authorName};
        props.onAuthorAdded(newAuthor);
        setAuthorName(null);
    };

    useEffect(() => {
        if (!authorToUpdate) {
            setAuthorName(null);
            return;
        }
        setAuthorName(authorToUpdate.name);
    }, [authorToUpdate]);

    //------------------------------------------------------------------------------


    return (
        <Row>
            <Col xs={12} md={9} className="author-form py-5">
                <Row>
                    <Col xs={12}>
                        <label className="create-author-title">
                            {authorToUpdate ? 'Update Author' : 'Create Author'}
                        </label>
                        <i className="feather icon-x-circle float-right mt-1" onClick={props.onClickClose}/>
                    </Col>
                </Row>

                <form onSubmit={handleCreateAuthor}>
                    <Row>
                        <Col xs={12} lg={{span: 11, offset: 1}} className="author-input mt-5 align-content-end">
                            <Form.Label className="author-form-label">Name of Author</Form.Label>
                            <Form.Control size="sm" type="text"
                                          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                              handleSetAuthorName(event.target.value);
                                          }}
                                          value={authorName ? authorName : ''}/>

                            <Button type="submit"
                                    className="create-author-btn float-right mt-4 px-4 py-1">
                                {authorToUpdate ? 'Update' : 'Create'}
                            </Button>
                        </Col>
                    </Row>
                </form>

            </Col>
        </Row>
    )
};
export default AuthorForm;
