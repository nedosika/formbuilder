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
                        initialValue: 'qqq'
                    },
                    {
                        type: 'alphabet',
                        name: 'io',
                        initialValue: 'qqq',
                        restriction: { maxLength: 10 }
                    },
                    {
                        type: 'select',
                        name: 'color',
                        values: ['red', 'green', 'blue']
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
