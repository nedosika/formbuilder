import React from "react";

import FormBuilder from "./FormBuilder";
import {VALIDATION_TYPES} from "./FormBuilder/constants";
import {FIELDS} from "./FormBuilder/constants";
import {isEmpty} from "lodash";

//TODO:
// 1.Add items:
// array,
// object with key value,
// radio-buttons,
// checkbox
// 2. Add validation by server(with two endpoints: validation and save) by array and showing errors on frontend
// 3.

function App() {
    const onSubmit = async (data) => {
        let errors = {};

        const response = await fetch('https://k5ip0.sse.codesandbox.io/api/validators/ip', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({...data.values})
        });

        if (response.status === 405) {
            const result = await response.json();
            errors = result.errors
            console.log(errors)
        }

        if (response.status === 200) {
            const data = await response.json();
            console.log(data)
        }

        if(isEmpty(errors)){
            const response = await fetch('https://k5ip0.sse.codesandbox.io/api/ip', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({...data.values})
            });

            if (response.status === 201) {
                const data = await response.json();
                console.log(data)
            }
        }

        return {...errors};
    }

    return (
        <FormBuilder
            onSubmit={onSubmit}
            config={{
                fields: [
                    {
                        type: FIELDS.object.type,
                        name: 'ips',
                        label: 'Object',
                        initialValue: {
                            'key': '192',
                            'key2': '192.168.0.1'
                        }
                    },
                    // {
                    //     type: FIELDS.array.type,
                    //     name: 'array',
                    //     label: 'Array: ',
                    //     initialValue: ['test1', 'test2'],
                    //     [VALIDATION_TYPES.validation]: {
                    //         [FIELDS.array.validators.alphabet]: true
                    //     }
                    // },
                    // {
                    //     type: FIELDS.radio.type,
                    //     name: 'radio',
                    //     values: [
                    //         {value: 'first', label: 'FirstValue'},
                    //         {value: 'second', label: 'SecondValue', checked: true},
                    //         {value: 'third', label: 'ThirdValue'}
                    //     ],
                    // },
                    // {
                    //     type: FIELDS.checkbox.type,
                    //     name: 'checkbox1',
                    //     label: 'CheckBox1'
                    // },
                    // {
                    //     type: FIELDS.text.type,
                    //     name: 'firstName',
                    //     label: 'First Name:',
                    //     initialValue: 'qqq',
                    //     [VALIDATION_TYPES.validation]: {
                    //         [FIELDS.text.validators.minLength]: 2,
                    //         [FIELDS.text.validators.maxLength]: 10
                    //     }
                    // },
                    // {
                    //     [FIELDS.text.props.type]: FIELDS.text.type,
                    //     [FIELDS.text.props.name]: 'secondName',
                    //     [FIELDS.text.props.label]: 'Second Name:',
                    //     [FIELDS.text.props.initialValue]: 'Second Name',
                    //     [FIELDS.text.props.required]: true,
                    //     [FIELDS.text.props.initialValue]: '',
                    //     [VALIDATION_TYPES.validation]: {
                    //         [FIELDS.text.validators.minLength]: 3,
                    //         [FIELDS.text.validators.maxLength]: 10,
                    //         [FIELDS.text.validators.required]: true
                    //     }
                    // },
                    // {
                    //     type: FIELDS.password.type,
                    //     name: 'password',
                    //     label: 'Password:',
                    //     autoComplete: 'new-password',
                    //     required: true,
                    //     initialValue: '',
                    //     [VALIDATION_TYPES.validation]: {
                    //         [FIELDS.password.validators.minLength]: 8,
                    //         [FIELDS.password.validators.maxLength]: 10
                    //     }
                    // },
                    // {
                    //     type: FIELDS.alphabet.type,
                    //     name: 'io',
                    //     label: 'IO:',
                    //     initialValue: '',
                    //     [VALIDATION_TYPES.validation]: {
                    //         [FIELDS.alphabet.validators.minLength]: 1
                    //     },
                    //     restriction: {
                    //         [FIELDS.alphabet.restrictions.maxLength]: 2
                    //     },
                    // },
                    // {
                    //     type: FIELDS.select.type,
                    //     name: 'color',
                    //     label: 'Color:',
                    //     initialValue: '0',
                    //     values: ['red', 'green', 'blue']
                    // },
                    // {
                    //     type: FIELDS.number.type,
                    //     name: 'age',
                    //     label: 'Age:',
                    //     [VALIDATION_TYPES.validation]: {
                    //         [FIELDS.number.validators.min]: 2,
                    //         [FIELDS.number.validators.max]: 88
                    //     },
                    //     restriction: {
                    //         [FIELDS.number.restrictions.maxLength]: 2
                    //     }
                    // },
                    // {
                    //     type: FIELDS.email.type,
                    //     name: 'email',
                    //     label: 'Email:',
                    //     required: true
                    // },
                    // {
                    //     type: FIELDS.textarea.type,
                    //     name: 'description',
                    //     label: 'Description:',
                    //     [VALIDATION_TYPES.validation]: {
                    //         [FIELDS.textarea.validators.required]: true,
                    //         [FIELDS.textarea.restrictions.alphabet]: true,
                    //     },
                    //     restriction: {
                    //         [FIELDS.textarea.restrictions.alphabet]: true,
                    //     }
                    // },
                ]
            }}
        />
    );
}

export default App;
