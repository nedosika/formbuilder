import React from "react";

import FormBuilder from "./comonents/FormBuilder";

function App() {
    const onSubmit = (data) => console.log(data);

    return (
        <FormBuilder
            config={{
                onSubmit,
                fields: [
                    {
                        type: 'text',
                        name: 'firstName',
                    },
                    {
                        type: 'alphabet',
                        name: 'io',
                        restriction: { maxLength: 10 }
                    },
                    {
                        type: 'select',
                        name: 'color',
                        value: ['red', 'green', 'blue']
                    },
                    {
                        type: 'number',
                        name: 'age',
                        validate: { min:2, max: 99 }
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
