import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {IAuthor} from "../../../types/libraryTypes";

type AuthorFormProps = {
    onClickClose: () => void,
    onAuthorAdded: (author: IAuthor) => void
};

const AuthorForm: React.FC<AuthorFormProps> = (props) => {

    // author's add section --------------------------------------------------------
    const [authorName, setAuthorName] = useState<string | null>(null);

    const handleSetAuthorName = (name: string) => {
        setAuthorName(name);
    };

    const handleCreateAuthor = () => {
        if (authorName == null) {
            return
        }
        const newAuthor: IAuthor = {name: authorName};
        props.onAuthorAdded(newAuthor); // pass props from child to parent
    };

    //------------------------------------------------------------------------------



    return (
        <Row>
            <Col xs={12} md={9} className="author-form py-5">
                <Row>
                    <Col xs={12}>
                        <label className="create-author-title">Create Author</label>
                        <i className="feather icon-x-circle float-right mt-1" onClick={props.onClickClose}/>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} lg={{span: 11, offset: 1}} className="author-input mt-5 align-content-end">
                        <Form.Label className="author-form-label">Name of Author</Form.Label>
                        <Form.Control size="sm" type="text"
                                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          handleSetAuthorName(event.target.value);
                                      }}
                                      value={authorName ? authorName : ''}/>
                        <Button type="submit"
                                onClick={handleCreateAuthor}
                                className="create-author-btn float-right mt-4 px-4 py-1"> Create
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};
export default AuthorForm;
