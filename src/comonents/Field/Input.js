import React from 'react';
import {omit} from "lodash";

const Input = (props) => {
    const {
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
            <label>{label}
                <input
                    {...omit(props, ['restriction', 'validation', 'initialValue', 'children', 'values'])}
                    value={value}
                    onChange={handleChange}
                />
                {children}
                {error && (<div style={{color: 'red'}}>{error}</div>)}
            </label>
        </div>
    );
};

export default Input;