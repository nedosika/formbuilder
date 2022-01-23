import React, {useState} from 'react';
import {assign, entries, isEmpty, omit} from "lodash";

import Fields from "./Field";
import {restrict, validate} from "../helpers";

const FormBuilder = (props) => {
    const {config: {fields}, onSubmit} = props;
    const [state, setState] = useState({
        values: assign(
            {},
            ...fields.map((field) => ({
                [field.name]: field.initialValue
            }))
        ),
        errors: {},
        isValid: true
    });

    console.log(state)

    const handleChange = (field, validation, restriction) => {
        console.log(field)

        // const isRestricted = restrict(value, restriction);
        //
        // if (!isRestricted)
        //     setState((prevState) => {
        //         const values = {
        //             ...prevState.values,
        //             [field.name]: field.value
        //         };
        //         const errors = {
        //             ...omit(prevState.errors, [field.name]),
        //             ...validate(field)
        //         };
        //         const isValid = isEmpty(errors);
        //
        //         return {
        //             ...prevState,
        //             values,
        //             errors,
        //             isValid
        //         }
        //     });

        setState((prevState) => {
            const values = {
                ...prevState.values,
                [field.name]: field.value
            };
            const errors = {};
            const isValid = true;

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

        const errors = assign({}, ...entries(state.values).map(([name, value]) =>
            validate({
                name,
                value,
                validation: assign({}, ...fields.map((field) => ({[field.name]: field.validation})))[name]
            })));

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
                        React.createElement(
                            Fields[field.type],
                            {
                                ...field,
                                key: field.name,
                                value: state.values[field.name],
                                error: state.errors[field.name],
                                onChange: handleChange
                            }
                        ))
                }
                <input type='submit' disabled={!state.isValid}/>
            </form>
        </div>
    );
};

export default FormBuilder;