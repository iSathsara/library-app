import React from 'react';

// define a type in typescript
type CreateBookProps = {
    onClickCreate: () => void
};

const CreateBook:React.FC<CreateBookProps> = (props) => {
    return(
        <label className="create-book mt-3" onClick={props.onClickCreate}>
            <i className="feather icon-plus"/> Add Book</label>
    )
};
export default CreateBook;
