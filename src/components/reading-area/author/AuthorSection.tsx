import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import AuthorList from "./AuthorList";
import CreateAuthor from "./CreateAuthor";
import AuthorForm from "./AuthorForm";
import {IAuthor} from "../../../types/libraryTypes";

const AuthorSection: React.FC = () => {

    const [isVisible, setVisible] = useState(false);

    const initialAuthor: IAuthor[] = [];

    const [author, setAuthor] = useState<IAuthor[]>(initialAuthor);

    // form visibility -----------------------------------
    const handleOnClickCreate = () => {
        setVisible(true);
    };

    const handleOnClickClose = () => {
        setVisible(false);
    };

    // add author handler --------------------------------
    const handleAuthorAdd = (newAuthor: IAuthor) => {
        const allAuthors: IAuthor[] = author.slice();
        allAuthors.push(newAuthor);
        setAuthor(allAuthors);
    };

    // delete author handler ----------------------------
    const handleAuthorDeleted = (index: number) => {
        const allAuthors: IAuthor[] = author.slice();
        allAuthors.splice(index, 1);
        setAuthor(allAuthors);
    };

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h2>Authors</h2>
                    <hr className="author-title mt-1 mb-4 mr-0"/>
                </Col>
            </Row>
            <AuthorList myAuthors={author} onDeleted={handleAuthorDeleted}/>
            <CreateAuthor onClickCreate={handleOnClickCreate}/>
            {isVisible && <AuthorForm onClickClose={handleOnClickClose} onAuthorAdded={handleAuthorAdd}/>}
        </React.Fragment>
    )
};
export default AuthorSection;
