import React from 'react';

import Input from './Input';
import {isEmpty} from "lodash";

const ACTIONS = {
    add: "add",
    delete: "delete"
}

const ObjectInput = (props) => {
    const {
        name,
        error,
        label,
        onChange,
        validation,
        restriction,
        value,
    } = props;

    const values = isEmpty(value)
        ? [{key: '', value: ''}]
        : Object.entries(value).map(([key, value]) => ({key, value}));

    const handleChange = (index) => (field) => {
        values[index] = {
            ...values[index],
            [field.name]: field.value
        };

        const value = Object.assign({}, ...values.map(({key, value}) => ({[key]: value})));

        onChange({
            name,
            value,
            restriction,
            validation
        })
    };

    const handleButtonClick = (index) => (event) => {
        event.preventDefault();

        const {action} = event.target.dataset;

        if (action === ACTIONS.add)
            values.push({key: '', value: ''});

        if (action === ACTIONS.delete)
            values.splice(index, 1);

        const value = Object.assign({}, ...values.map(({key, value}) => ({[key]: value})));

        onChange({
            name,
            value,
            restriction,
            validation
        })
    }

    return (
        <div>
            <div>
                <div>
                    <label htmlFor={name}>{label}</label>
                </div>
                {
                    values.map((element, index) => {
                        return (
                            <div key={element.key} style={{display: 'flex', flexDirection: 'row'}}>
                                <Input
                                    name='key'
                                    value={element.key}
                                    onChange={handleChange(index)}
                                />
                                <Input
                                    name='value'
                                    value={element.value}
                                    onChange={handleChange(index)}
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
                            </div>
                        );
                    })
                }
                {error && (<div style={{color: 'red'}}>{error}</div>)}
            </div>
        </div>
    );
};

export default ObjectInput;