import React from 'react';

import Field from "./Field";
import useValidator from "../hooks/useValidator";

const FormBuilder = (props) => {
    const {config: {fields}, onSubmit} = props;
    const [state, setState] = React.useState(
        {
            isValid: true,
            errors: {},
            values: Object.assign({}, ...fields.map((field) => ({[field.name]:field.initialValue || ''})))
        }
    );
    const validator = useValidator();

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        let error = '';

        const field = fields.find((field) => field.name === name);

        if(field?.restriction){
            error = validator.validate(
                Object
                    .entries(field.restriction)
                    .map(([validateFn, value]) =>
                        validator[validateFn](value)
                    )
            )(value);

            if(error)
                return;
        }

        if(field?.validation){
            error = validator.validate(
                Object
                    .entries(field.validation)
                    .map(([validateFn, value]) =>
                        validator[validateFn](value)
                    )
            )(value);
        }

        setState((prevState) => ({
                ...prevState,
                values: {
                    ...prevState.values,
                    [name]: value
                },
                errors: {
                    ...prevState.errors,
                    [name]: error
                },
                isValid: !Boolean(error)
            })
        );
    };

    //console.log(state)

    const handleSubmit = (event) => {
        event.preventDefault();
        state.isValid && onSubmit({...state});
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
                <input type='submit' disabled={!state.isValid}/>
            </form>
        </div>
    );
};

export default FormBuilder;