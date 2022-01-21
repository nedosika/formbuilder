import React from 'react';
import {omit} from "lodash";

const Input = (props) => {
    const {name, error, label, onChange, validation, restriction} = props;

    const handleChange = (event) => {
        onChange(event, validation, restriction);
    };

    return (
        <div>
            <div>
                <label htmlFor={name}>{label}</label>
            </div>
            <input {...omit(props, ['restriction', 'validation', 'initialValue'])} onChange={handleChange}/>
            {error && (<div style={{color: 'red'}}>{error}</div>)}
        </div>
    );
};

export default Input;