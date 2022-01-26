import React from 'react';
import {omit} from "lodash";

const CheckBox = (props) => {
    const {
        name,
        error,
        label,
        onChange,
        validation,
        restriction,
        children,
        value = ''
    } = props;

    const handleChange = ({target: {name, value}}) => {
        onChange({
            name,
            value,
            validation,
            restriction
        });
    };

    return (
        <div>
            <div>
                <label htmlFor={name}>{label}</label>
            </div>
            <input
                {...omit(props, ['restriction', 'validation', 'initialValue', 'children'])}
                value={value}
                onChange={handleChange}
            />
            {children}
            {error && (<div style={{color: 'red'}}>{error}</div>)}
        </div>
    );
};

export default CheckBox;