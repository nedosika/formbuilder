import React from 'react';

import Input from './Input';

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
        value: values = {'': ''}
    } = props;

    const handleChange = (field) => {
        console.log(name, field)

        console.log({
            ...values,
            [field.name]: field.value
        })

        // const value = [...values];
        //
        // value[field.name] = field.value;
        //
        // onChange({
        //     name,
        //     value,
        //     validation,
        //     restriction
        // });
    };

    const handleButtonClick = (index) => (event) => {
        // event.preventDefault();
        //
        // const action = event.target.dataset.action;
        // const value = [...values];
        //
        // if (action === ACTIONS.add)
        //     value.push('');
        //
        // if (action === ACTIONS.delete)
        //     value.splice(index, 1);
        //
        // onChange({
        //     name,
        //     value,
        //     validation,
        //     restriction
        // });
    }

    return (
        <div>
            <div>
                <div>
                    <label htmlFor={name}>{label}</label>
                </div>
                {
                    Object.entries(values).map(([key, value]) => {
                        return (
                            <div key={key} style={{display: 'flex', flexDirection: 'row'}}>
                                <Input
                                    name={key}
                                    value={key}
                                    onChange={handleChange}
                                >
                                    {/*{*/}
                                    {/*    values.length - 1 === index &&*/}
                                    {/*    <button data-action={ACTIONS.add} onClick={handleButtonClick(index)}>+</button>*/}
                                    {/*}*/}
                                    {/*{*/}
                                    {/*    values.length > 1 &&*/}
                                    {/*    <button data-action={ACTIONS.delete} onClick={handleButtonClick(index)}>-</button>*/}
                                    {/*}*/}
                                </Input>
                                <Input
                                    name={value}
                                    value={value}
                                    onChange={handleChange}
                                >
                                    {/*{*/}
                                    {/*    values.length - 1 === index &&*/}
                                    {/*    <button data-action={ACTIONS.add} onClick={handleButtonClick(index)}>+</button>*/}
                                    {/*}*/}
                                    {/*{*/}
                                    {/*    values.length > 1 &&*/}
                                    {/*    <button data-action={ACTIONS.delete} onClick={handleButtonClick(index)}>-</button>*/}
                                    {/*}*/}
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