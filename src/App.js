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
                        label: 'First Name: ',
                        initialValue: 'qqq'
                    },
                    {
                        type: 'text',
                        name: 'secondName',
                        label: 'Second Name: ',
                        initialValue: '',
                        validation: { maxLength: 10 }
                    },
                    {
                        type: 'alphabet',
                        name: 'io',
                        label: 'IO: ',
                        initialValue: '',
                        restriction: { maxLength: 2 },
                        validation: { minLength: 2 }
                    },
                    {
                        type: 'select',
                        name: 'color',
                        values: ['red', 'green', 'blue']
                    },
                    {
                        type: 'number',
                        name: 'age',
                        validation: { min:2, max: 99 }
                    },
                    {
                        type:'email',
                        name:'email',
                    },
                ]
            }}
        />
    );
}

export default App;
