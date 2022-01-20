import React from 'react';
import {omit} from "lodash";

const Input = (props) => {
    const {name, error, label} = props;

    return (
        <div>
            <div>
                <label htmlFor={name}>{label}</label>
            </div>
            <input {...omit(props, ['restriction', 'validation', 'initialValue'])}/>
            {error && (<div style={{color: 'red'}}>{error}</div>)}
        </div>
    );
};

export default Input;