import React from 'react';

const Select = (props) => {
    const {name, error, label, value, onChange, values} = props;

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <select onChange={onChange} value={value} name={name}>
                {values.map((displayValue, id) => <option value={id} key={id}>{displayValue}</option>)}
            </select>
            {error && (<div style={{color: 'red'}}>{error}</div>)}
        </div>
    );
};

export default Select;