import React from 'react';

import Input from './Input';

const ACTIONS = {
    add: "add",
    delete: "delete"
}

const ArrayInput = (props) => {
    const {
        name,
        error,
        label,
        onChange,
        validation,
        restriction,
        value: values = ['']
    } = props;

    const handleChange = (field) => {
        const value = [...values];

        value[field.name] = field.value;

        onChange({
            name,
            value,
            validation,
            restriction
        });
    };

    const handleButtonClick = (index) => (event) => {
        event.preventDefault();

        const action = event.target.dataset.action;
        const value = [...values];

        if (action === ACTIONS.add)
            value.push('');

        if (action === ACTIONS.delete)
            value.splice(index, 1);

        onChange({
            name,
            value,
            validation,
            restriction
        });
    }

    return (
        <div>
            <div>
                <div>
                    <label htmlFor={name}>{label}</label>
                </div>
                {
                    values.map((value, index) => {
                        return (
                            <Input
                                key={index}
                                name={index}
                                value={value}
                                onChange={handleChange}
                            >
                                {
                                    values.length - 1 === index &&
                                    <button data-action={ACTIONS.add} onClick={handleButtonClick(index)}>+</button>
                                }
                                {
                                    values.length > 1 &&
                                    <button data-action={ACTIONS.delete} onClick={handleButtonClick(index)}>-</button>
                                }
                            </Input>
                        );
                    })
                }
                {error && (<div style={{color: 'red'}}>{error}</div>)}
            </div>
        </div>
    );
};

export default ArrayInput;