import React from 'react';
import {Col, Row} from "react-bootstrap";
import {IAuthor} from "../../../types/libraryTypes";

type AuthorProps = {
    myAuthor: IAuthor
    index: number
    onDeletedAuthor: (index: number) => void
    onUpdateReq: (index: number) => void
}

const Author: React.FC<AuthorProps> = (props) => {

    const {myAuthor, index, onDeletedAuthor} = props;

    return (
        <Row className="author-details py-1 ml-0 mr-0">
            <Col xs={9} className="pl-0">
                <label>{(index + 1) + ". " + myAuthor.name}</label>
            </Col>
            <Col xs={3} className="text-right">
                <i className="feather icon-edit text-warning mr-3"
                   onClick={() => props.onUpdateReq(index)}
                />
                <i className="feather icon-trash-2 text-danger mr-2"
                   onClick={() => onDeletedAuthor(index)}
                />
            </Col>
        </Row>
    )
};
export default Author;
