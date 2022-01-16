import React from 'react';

import Field from "./Field";

const FormBuilder = (props) => {
    const {config: {fields}, onSubmit} = props;
    const [state, setState] = React.useState(
        {
            isValid: true,
            errors: {},
            values: Object.assign({}, ...fields.map((field) => ({[field.name]:field.initialValue || ''})))
        }
    );

    const handleChange = (event) => {
        event.preventDefault();

        const name = event.target.name;
        const value = event.target.value;

        const error = 'dd';

        setState((prevState) => ({
                ...prevState,
                values: {
                    ...prevState.values,
                    [name]: value
                },
                errors: {
                    ...prevState.errors,
                    [name]: error
                }
            })
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        state.isValid && onSubmit({...state});
    };

    console.log(state);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {
                    fields.map((field) => <Field
                        onChange={handleChange}
                        value={state.values[field.name]}
                        name={field.name}
                        label={field.label}
                        key={field.name}
                        error={state.errors[field.name]}
                    />)
                }
                <input type='submit' disabled={!state.isValid}/>
            </form>
        </div>
    );
};

export default FormBuilder;