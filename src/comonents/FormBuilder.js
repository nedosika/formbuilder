import React, {useState} from 'react';

import {assign, entries, isEmpty, omit} from "lodash";

import Field from "./Field";
import {restrict, validate} from "../helpers";

const FormBuilder = (props) => {
    const {config: {fields}, onSubmit} = props;
    const [state, setState] = useState({
        values: assign(
            {},
            ...fields.map((field) => ({
                [field.name]: field.initialValue || ''
            }))
        ),
        errors: {},
        isValid: true
    });

    const handleChange = (validation, restriction) => ({target: {name, value}}) => {
        const isRestricted = restrict(value, restriction)

        if (!isRestricted)
            setState((prevState) => {
                const values = {
                    ...prevState.values,
                    [name]: value
                };
                const errors = {
                    ...omit(prevState.errors, [name]),
                    ...validate({name, value, validation})
                };
                const isValid = isEmpty(errors);

                return {
                    ...prevState,
                    values,
                    errors,
                    isValid
                }
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = assign({}, ...entries(state.values).map(([name, value]) =>
            validate({
                name,
                value,
                validation: assign({}, ...fields.map((field) => ({[field.name]: field.validation})))[name]
            })))

        if (isEmpty(errors)) {
            onSubmit(state);
        } else {
            setState((prevState) => ({...prevState, errors, isValid: false}));
        }
    }

    return (<div>
        <form onSubmit={handleSubmit} noValidate>
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