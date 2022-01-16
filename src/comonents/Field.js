import React from 'react';

const Field = (props) => {
    const {name, value, onChange} = props;

    return (
        <input onChange={onChange} value={value} name={name}/>
    );
};

export default Field;