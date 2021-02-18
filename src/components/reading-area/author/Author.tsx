import React from 'react';
import {Col, Row} from "react-bootstrap";
import {IAuthor} from "../../../types/libraryTypes";

type AuthorProps = {
    myAuthor: IAuthor
}

const Author: React.FC<AuthorProps> = (props) => {

    const {myAuthor} = props;

    return (
        <Row className="author-details py-1 ml-0 mr-0">
            <Col xs={9} className="pl-0">
                <label>{myAuthor.name}</label>
            </Col>
            <Col xs={3} className="text-right">
                <i className="feather icon-edit text-warning mr-3"/>
                <i className="feather icon-trash-2 text-danger mr-2"/>
            </Col>
        </Row>
    )
};
export default Author;
