import React from 'react';

const Field = (props) => {
    const {name, error, label, value, onChange} = props;

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input onChange={onChange} value={value} name={name}/>
            {error && (<div style={{color: 'red'}}>{error}</div>)}
        </div>
    );
};

export default Field;