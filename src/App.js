import React from "react";

import FormBuilder from "./comonents/FormBuilder";

function App() {
    const onSubmit = (data) => console.log(data);

    return (
        <FormBuilder
            onSubmit={onSubmit}
            config={{
                fields: [
                    {
                        type: 'text',
                        name: 'firstName',
                        label: 'First Name:',
                        initialValue: 'qqq',
                        validation: { minLength: 3, maxLength: 10 }
                    },
                    {
                        type: 'text',
                        name: 'secondName',
                        label: 'Second Name:',
                        required: true,
                        initialValue: '',
                        validation: { minLength: 3, maxLength: 10 }
                    },
                    {
                        type: 'password',
                        name: 'password',
                        label: 'Password:',
                        autoComplete: 'new-password',
                        required: true,
                        initialValue: '',
                        validation: { minLength: 8, maxLength: 20 }
                    },
                    {
                        type: 'alphabet',
                        name: 'io',
                        label: 'IO:',
                        initialValue: '',
                        restriction: { maxLength: 2 },
                        validation: { minLength: 1 }
                    },
                    {
                        type: 'select',
                        name: 'color',
                        label: 'Color:',
                        initialValue: '1',
                        values: ['red', 'green', 'blue']
                    },
                    {
                        type: 'number',
                        name: 'age',
                        label: 'Age:',
                        validation: { min:2, max: 99 },
                        restriction: { maxLength: 3 },
                    },
                    {
                        type:'email',
                        name:'email',
                        label: 'Email:',
                        required: true
                    },
                    {
                        type:'textarea',
                        name:'description',
                        label: 'Description:',
                        restriction: { alphabet: true },
                        validation: { required: true }
                    },
                ]
            }}
        />
    );
}

export default App;
