import React from 'react';

const TextArea = (props) => {
    const {name, error, label, value, onChange} = props;

    return (
        <div>
            <div>
                <label htmlFor={name}>{label}</label>
            </div>
            <textarea name={name} onChange={onChange} value={value}/>
            {error && (<div style={{color: 'red'}}>{error}</div>)}
        </div>
    );
};

export default TextArea;