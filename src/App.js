import React from "react";

import {FIELDS, VALIDATION_TYPES} from "./constants";
import FormBuilder from "./comonents/FormBuilder";

//TODO:
// 1.Add items:
// array,
// object with key value,
// radio-buttons,
// checkbox
// 2. Add validation by server(with two endpoints: validation and save) by array and showing errors on frontend
// 3.

function App() {
    const onSubmit = (data) => console.log(data);

    return (
        <FormBuilder
            onSubmit={onSubmit}
            config={{
                fields: [
                    {
                        type: FIELDS.radio.type,
                        name: 'radio',
                        values: [
                            {value: 'first', label: 'FirstValue'},
                            {value: 'second', label: 'SecondValue', checked: true},
                            {value: 'third', label: 'ThirdValue'}
                        ],
                    },
                    {
                        type: FIELDS.checkbox.type,
                        name: 'checkbox'
                    },
                    {
                        type: FIELDS.text.type,
                        name: 'firstName',
                        label: 'First Name:',
                        initialValue: 'qqq',
                        [VALIDATION_TYPES.validation]: {
                            [FIELDS.text.validators.minLength]: 2,
                            [FIELDS.text.validators.maxLength]: 10
                        }
                    },
                    {
                        type: FIELDS.text.type,
                        name: 'secondName',
                        label: 'Second Name:',
                        placeholder: 'Second Name',
                        required: true,
                        initialValue: '',
                        [VALIDATION_TYPES.validation]: {
                            [FIELDS.text.validators.minLength]: 3,
                            [FIELDS.text.validators.maxLength]: 10,
                            [FIELDS.text.validators.required]: true
                        }
                    },
                    {
                        type: FIELDS.password.type,
                        name: 'password',
                        label: 'Password:',
                        autoComplete: 'new-password',
                        required: true,
                        initialValue: '',
                        [VALIDATION_TYPES.validation]: {
                            [FIELDS.password.validators.minLength]: 8,
                            [FIELDS.password.validators.maxLength]: 10
                        }
                    },
                    {
                        type: FIELDS.alphabet.type,
                        name: 'io',
                        label: 'IO:',
                        initialValue: '',
                        [VALIDATION_TYPES.validation]: {
                            [FIELDS.alphabet.validators.minLength]: 1
                        },
                        restriction: {
                            [FIELDS.alphabet.restrictions.maxLength]: 2
                        },
                    },
                    {
                        type: FIELDS.select.type,
                        name: 'color',
                        label: 'Color:',
                        initialValue: '0',
                        values: ['red', 'green', 'blue']
                    },
                    {
                        type: FIELDS.number.type,
                        name: 'age',
                        label: 'Age:',
                        [VALIDATION_TYPES.validation]: {
                            [FIELDS.number.validators.min]: 2,
                            [FIELDS.number.validators.max]: 88
                        },
                        restriction: {
                            [FIELDS.number.restrictions.maxLength]: 2
                        }
                    },
                    {
                        type: FIELDS.email.type,
                        name: 'email',
                        label: 'Email:',
                        required: true
                    },
                    {
                        type: FIELDS.textarea.type,
                        name: 'description',
                        label: 'Description:',
                        [VALIDATION_TYPES.validation]: {
                            [FIELDS.textarea.validators.required]: true,
                            [FIELDS.textarea.restrictions.alphabet]: true,
                        },
                        restriction: {
                            [FIELDS.textarea.restrictions.alphabet]: true,
                        }
                    },
                    {
                        type: FIELDS.array.type,
                        name: 'ipAddresses',
                        label: 'IP-addresses',
                        initialValue: ['test1', 'test2'],
                        [VALIDATION_TYPES.validation]: {
                            [FIELDS.array.validators.alphabet]: true
                        }
                    },
                    {
                        type: FIELDS.array.type,
                        name: 'ipAddresses2',
                        label: 'IP-addresses2',
                        [VALIDATION_TYPES.validation]: {
                            [FIELDS.array.validators.alphabet]: true
                        }
                    },
                    {
                        type: FIELDS.object.type,
                        name: 'myObject',
                        label: 'Object',
                        initialValue: {
                            'key': 'value',
                            'key2': 'value2'
                        }
                    }
                ]
            }}
        />
    );
}

export default App;
