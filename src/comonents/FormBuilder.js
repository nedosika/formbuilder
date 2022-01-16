import React from 'react';

import Field from "./Field";

const FormBuilder = (props) => {
    const {config: {fields}, onSubmit} = props;
    const [state, setState] = React.useState(Object.assign(
        {},
        ...fields.map((field) => ({[field.name]: field.initialValue || ''})))
    );

    const handleChange = (event) => {
        event.preventDefault();

        const name = event.target.name;
        const value = event.target.value;

        setState((prevState) => ({...prevState, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        return onSubmit({...state});
    };

    console.log(state)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {
                    fields.map((field) => <Field
                        onChange={handleChange}
                        value={state[field.name]}
                        name={field.name}
                        key={field.name}
                    />)
                }
                <input type='submit'/>
            </form>
        </div>
    );
};

export default FormBuilder;