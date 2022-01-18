import React from 'react';
import {omit} from "lodash";

import Field from "./Field";
import useValidator from "../hooks/useValidator";

const FormBuilder = (props) => {
    const {config: {fields}, onSubmit} = props;
    const [state, setState] = React.useState({
        errors: {},
        values: Object.assign({}, ...fields.map((field) => ({[field.name]: field.initialValue || ''})))
    });
    const validator = useValidator();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({...state});
    };

    const handleChange = (event) => {
        event.preventDefault();

        const name = event.target.name;
        const value = event.target.value;

        const field = fields.find((field) => field.name === name);

        if (field.restriction && validator.validate(
            Object.entries(field.restriction).map(([validateFn, value]) =>
                validator[validateFn](value)))
        (value)) return;

        const errorMessage = field.validation && validator.validate(
            Object.entries(field.validation).map(([validateFn, value]) =>
                validator[validateFn](value)))
        (value);

        const error = errorMessage ? {[name]: errorMessage} : {}

        setState((prevState) => ({
            ...prevState,
            values: {
                ...prevState.values,
                [name]: value
            },
            errors: {
                ...omit(prevState.errors, [name]),
                ...error
            }
        }));

    }

    console.log(state)

    return (<div>
        <form onSubmit={handleSubmit}>
            {
                fields.map((field) =>
                    <Field
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        type={field.type}
                        values={field.values}
                        onChange={handleChange}
                        value={state.values[field.name]}
                        error={state.errors[field.name]}
                    />
                )
            }
            <input type='submit'/>
        </form>
    </div>);
}
export default FormBuilder;