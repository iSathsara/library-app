import React from 'react';

type CreateAuthorProps = {
    onClickCreate: () => void
};

const CreateAuthor:React.FC<CreateAuthorProps> = (props) => {
    return(
        <label className="create-author mt-3" onClick={props.onClickCreate}>
            <i className="feather icon-plus"/> Add Author</label>
    )
};
export default CreateAuthor;
