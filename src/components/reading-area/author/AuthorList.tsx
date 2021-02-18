import React from 'react';
import Author from "./Author";
import {IAuthor} from "../../../types/libraryTypes";

type AuthorListProps = {
    myAuthors: IAuthor[]
}

const AuthorList: React.FC<AuthorListProps> = (props) => {

    const {myAuthors} = props;

    const renderAuthor = () => {
        return myAuthors.map((currentAuthor: IAuthor, indexNo: number) => {
            return (<Author myAuthor={currentAuthor} key={indexNo}/>)
        });
    };

    return (
        <React.Fragment>
            {renderAuthor()}
        </React.Fragment>
    )
};
export default AuthorList;
