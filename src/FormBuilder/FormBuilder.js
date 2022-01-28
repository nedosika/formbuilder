import React, {useState} from 'react';
import {isEmpty, omit} from "lodash";

import {VALIDATION_TYPES} from "./constants";
import Field from "./components/Field";
import validate from "./lib/validate";

const FormBuilder = (props) => {
    const {config: {fields}, onSubmit} = props;

    const [state, setState] = useState({
        values: Object.assign({}, ...fields.map(({name, initialValue}) => ({[name]: initialValue}))),
        errors: {},
        isValid: true
    });
    const [loader, setLoader] = useState(false)

    const handleChange = (field) => {
        console.log(field)
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        const values = fields.map((field) => ({
            ...field,
            value: state.values[field.name]
        }));

        const errors = validate(values, VALIDATION_TYPES.validation);

        if (isEmpty(errors)) {
            setLoader(true);

            const errors = await onSubmit(state);

            if(!isEmpty(errors)) {
                setState((prevState) => ({
                    ...prevState,
                    errors,
                    isValid: false
                }));
            }

            setLoader(false);
        } else {
            setState((prevState) => ({
                ...prevState,
                errors,
                isValid: false
            }));
        }
    };

    console.log(state)

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
                <input type='submit' disabled={!state.isValid || loader} value={loader ? 'Sending...' : 'Submit'}/>
            </form>
        </div>
    );
};

export default FormBuilder;