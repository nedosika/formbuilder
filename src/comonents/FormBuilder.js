import React from 'react';

import Field from "./Field";
import {entries, omit} from "lodash";
import useValidator from "../hooks/useValidator";

const FormBuilder = (props) => {
    const {config: {fields}, onSubmit} = props;
    const [state, setState] = React.useState({
        values: Object.assign({}, ...fields.map((field) => ({[field.name]: field.initialValue || ''}))),
        errors: {},
        isValid: true
    });

    const validator = useValidator();

    const handleSubmit = (event) => {
        event.preventDefault();
        state.isValid && onSubmit(state);
    };

    const handleChange = (validation, restriction) => (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if (validator.validate(entries(restriction).map(([validateFn, value]) =>
            validator[validateFn](value)))(value))
            return;

        const errorMessage = validator.validate(entries(validation).map(([validateFn, value]) =>
            validator[validateFn](value)))(value);

        setState((prevState) => {
            const values = {...prevState.values, [name]: value};
            const errors = {...omit(prevState.errors, [name]), ...(errorMessage ? {[name]: errorMessage} : {})};
            const isValid = !entries(errors).length;

            return {
                ...prevState,
                values,
                errors,
                isValid
            }
        });
    }

    console.log(state)

    return (<div>
        <form onSubmit={handleSubmit}>
            {
                fields.map((field) =>
                    <Field
                        {...field}
                        key={field.name}
                        value={state.values[field.name]}
                        error={state.errors[field.name]}
                        onChange={handleChange}
                    />
                )
            }
            <input type='submit' disabled={!state.isValid}/>
        </form>
    </div>);
}
export default FormBuilder;