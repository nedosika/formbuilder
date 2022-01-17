import React from 'react';

import Field from "./Field";
import useValidator from "../hooks/useValidator";

const FormBuilder = (props) => {
    const {config: {fields}, onSubmit} = props;
    const [state, setState] = React.useState(
        {
            errors: {},
            values: Object.assign({}, ...fields.map((field) => ({[field.name]: field.initialValue || ''})))
        }
    );
    const validator = useValidator();

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;

        const field = fields.find((field) => field.name === name);

        if(field.restriction){
            const errorMessage = validator.validate(
                Object
                    .entries(field.restriction)
                    .map(([validateFn, value]) =>
                        validator[validateFn](value)
                    )
            )(value);

            if(errorMessage)
                return;
        }

        setState((prevState) => {
            const errorMessage = field.validation && validator.validate(
                Object
                    .entries(field.validation)
                    .map(([validateFn, value]) =>
                        validator[validateFn](value)
                    )
            )(value);

            delete prevState.errors[name];

            const errors = errorMessage
                ? {
                    ...prevState.errors,
                    [name]: errorMessage
                }
                : {
                    ...prevState.errors
                }

            return ({
                ...prevState,
                values: {
                    ...prevState.values,
                    [name]: value
                },
                errors
            });
        });
    };

    console.log(state)

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({...state});
    };

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
                <input type='submit'/>
            </form>
        </div>
    );
};

export default FormBuilder;