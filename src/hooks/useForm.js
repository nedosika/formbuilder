import {useState} from "react";
import {omit, isEmpty} from "lodash";

import {validate, restrict} from "../helpers";

const useForm = (initialFields = {}, validation = []) => {
    const [state, setState] = useState(initialFields);

    const handleChange = (validation, restriction) => ({target: {name, value}}) => {
        if (restrict(value, restriction))
            setState((prevState) => {
                const values = {
                    ...prevState.values,
                    [name]: value
                };
                const errors = {
                    ...omit(prevState.errors, [name]),
                    ...validate({[name]: value}, [{[name]: validation}])
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

    const handleSubmit = (onSubmit) => (event) => {
        event.preventDefault();

        const errors = validate(state.values, validation);

        if (isEmpty(errors)) {
            onSubmit(state);
        } else {
            setState((prevState) => ({...prevState, errors, isValid: false}));
        }
    }

    return {form: {...state, handleChange}, handleSubmit}
}

export default useForm;