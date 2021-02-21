import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import AuthorList from "./AuthorList";
import CreateAuthor from "./CreateAuthor";
import AuthorForm from "./AuthorForm";
import {IAuthor} from "../../../types/libraryTypes";

const AuthorSection: React.FC = () => {

    const [isVisible, setVisible] = useState(false);

    const initialAuthor: IAuthor[] = [];

    const [authorsList, setAuthorList] = useState<IAuthor[]>(initialAuthor);

    const [authorToUpdate, setAuthorToUpdate] = useState<IAuthor | null>(null);

    const [updatedAuthorIndex, setUpdatedAuthorIndex] = useState<number | null>(null);


    // form visibility -----------------------------------
    const handleOnClickCreate = () => {
        setVisible(true);
        setAuthorToUpdate(null);
    };

    const handleOnClickClose = () => {
        setVisible(false);
    };

    // set form visible with update click
    useEffect(() => {
        if (!authorToUpdate) {
            return;
        }
        setVisible(true);
    }, [authorToUpdate]);


    // add author handler --------------------------------
    const handleAuthorAdd = (newAuthor: IAuthor) => {
        const allAuthors: IAuthor[] = authorsList.slice();
        allAuthors.push(newAuthor);
        setAuthorList(allAuthors);
    };

    // delete author handler ----------------------------
    const handleAuthorDeleted = (index: number) => {
        const allAuthors: IAuthor[] = authorsList.slice();
        allAuthors.splice(index, 1);
        setAuthorList(allAuthors);
    };

    // update author handler ----------------------------
    const handleAuthorUpdateReq = (index: number) => {
        setAuthorToUpdate(authorsList[index]);
        setUpdatedAuthorIndex(index);
    };

    const handleAuthorUpdated = (updatedAuthor: IAuthor, index: number) => {
        const allAuthors = authorsList.slice();
        allAuthors.splice(index, 1, updatedAuthor);
        setAuthorList(allAuthors);
    };

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h2>Authors</h2>
                    <hr className="author-title mt-1 mb-4 mr-0"/>
                </Col>
            </Row>
            <AuthorList myAuthors={authorsList}
                        onDeleted={handleAuthorDeleted}
                        onUpdateReq={handleAuthorUpdateReq}/>

            <CreateAuthor onClickCreate={handleOnClickCreate}/>

            {isVisible && <AuthorForm onClickClose={handleOnClickClose}
                                      onAuthorAdded={handleAuthorAdd}
                                      authorToUpdate={authorToUpdate}
                                      updatedAuthorIndex={updatedAuthorIndex}
                                      onAuthorUpdated={handleAuthorUpdated}
            />}
        </React.Fragment>
    )
};
export default AuthorSection;
