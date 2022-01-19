import React from 'react';

const Input = (props) => {
    const {name, error, label, value, onChange, validation, restriction} = props;

    return (
        <div>
            <div>
                <label htmlFor={name}>{label}</label>
            </div>
            <input type='text' name={name} value={value} onChange={onChange(validation, restriction)}/>
            {error && (<div style={{color: 'red'}}>{error}</div>)}
        </div>
    );
};

export default Input;