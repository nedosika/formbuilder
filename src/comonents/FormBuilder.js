import React, {useState} from 'react';
import {isEmpty, omit} from "lodash";

import {Field} from "./Field";
import validate from "../helpers/validate";
import {VALIDATION_TYPES} from "../constants";

const FormBuilder = (props) => {
    const {config: {fields}, onSubmit} = props;

    const [state, setState] = useState({
        values: Object.assign({}, ...fields.map(({name, initialValue}) => ({[name]: initialValue}))),
        errors: {},
        isValid: true
    });

    console.log(state)

    const handleChange = (field) => {
        if (isEmpty(validate([field], VALIDATION_TYPES.restriction)))
            setState((prevState) => {
                const values = {
                    ...prevState.values,
                    [field.name]: field.value
                };
                const errors = {
                    ...omit(prevState.errors, [field.name]),
                    ...validate([field], VALIDATION_TYPES.validation)
                };
                const isValid = isEmpty(errors);

                return {
                    ...prevState,
                    values,
                    errors,
                    isValid
                }
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const values = fields.map((field) => ({
            ...field,
            value: state.values[field.name]
        }));

        const errors = validate(values, VALIDATION_TYPES.validation);

        if (isEmpty(errors)) {
            onSubmit(state);
        } else {
            setState((prevState) => ({
                ...prevState,
                errors,
                isValid: false
            }));
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                {
                    fields.map((field) =>
                        <Field
                            key={field.name}
                            value={state.values[field.name]}
                            error={state.errors[field.name]}
                            {...field}
                            onChange={handleChange}
                        />
                    )
                }
                <input type='submit' disabled={!state.isValid}/>
            </form>
        </div>
    );
};

export default FormBuilder;