import React from "react";

import {FIELDS} from "./constants";

import FormBuilder from "./comonents/FormBuilder";

function App() {
    const onSubmit = (data) => console.log(data);

    return (
        <FormBuilder
            onSubmit={onSubmit}
            config={{
                fields: [
                    {
                        type: FIELDS.text.type,
                        name: 'firstName',
                        label: 'First Name:',
                        initialValue: 'qqq',
                        validation: {
                            [FIELDS.text.validators.minLength]: 3,
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
                        validation: {
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
                        validation: {
                            [FIELDS.password.validators.minLength]: 8,
                            [FIELDS.password.validators.maxLength]: 10
                        }
                    },
                    {
                        type: FIELDS.alphabet.type,
                        name: 'io',
                        label: 'IO:',
                        initialValue: '',
                        validation: {
                            [FIELDS.alphabet.validators.minLength]: 1
                        },
                        restriction: {
                            [FIELDS.alphabet.restrictions.maxLength]: 10
                        },
                    },
                    {
                        type: FIELDS.select.type,
                        name: 'color',
                        label: 'Color:',
                        initialValue: '1',
                        values: ['red', 'green', 'blue']
                    },
                    {
                        type: FIELDS.number.type,
                        name: 'age',
                        label: 'Age:',
                        validation: {
                            [FIELDS.number.validators.min]: 2,
                            [FIELDS.number.validators.max]: 88
                        },
                        restriction: {
                            [FIELDS.number.restrictions.maxLength]: 2
                        }
                    },
                    {
                        type:'email',
                        name:'email',
                        label: 'Email:',
                        required: true
                    },
                    {
                        type: FIELDS.textarea.type,
                        name: 'description',
                        label: 'Description:',
                        validation: {
                            [FIELDS.textarea.validators.required]: true,
                            [FIELDS.textarea.restrictions.alphabet]: true,
                        },
                        restriction: {
                            [FIELDS.textarea.restrictions.alphabet]: true,
                        }
                    },
                ]
            }}
        />
    );
}

export default App;
