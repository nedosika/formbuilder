import React from 'react';

const Select = (props) => {
    const {name, error, label, value, onChange, values} = props;

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <select
                onChange={onChange}
                name={name}
                value={value}>
                {values.map((text, value) =>
                    <option value={value} key={value}>
                        {text}
                    </option>
                )}
            </select>
            {error && (<div style={{color: 'red'}}>{error}</div>)}
        </div>
    );
};

export default Select;