import React from 'react';
import Author from "./Author";
import {IAuthor} from "../../../types/libraryTypes";

type AuthorListProps = {
    myAuthors: IAuthor[],
    onDeleted: (index: number) => void
    onUpdateReq: (index: number) => void
}

const AuthorList: React.FC<AuthorListProps> = (props) => {

    const {myAuthors} = props;

    const renderAuthor = () => {

        if (myAuthors.length === 0) {
            return (<p>No authors listed</p>);
        }
        return myAuthors.map((currentAuthor: IAuthor, indexNo: number) => {
            return (<Author myAuthor={currentAuthor}
                            index={indexNo}
                            key={indexNo}
                            onDeletedAuthor={props.onDeleted}
                            onUpdateReq={props.onUpdateReq}
            />)
        });
    };

    return (
        <React.Fragment>
            {renderAuthor()}
        </React.Fragment>
    )
};
export default AuthorList;
