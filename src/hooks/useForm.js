import {useState} from "react";
import useValidator from "./useValidator";
import {assign, entries, omit, isEmpty} from "lodash";

const useForm = (initialFields = {}, validation = []) => {
    const [state, setState] = useState(initialFields);
    const validator = useValidator();

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

    const validateAll = () => assign({}, ...validation.map((field) =>
        assign({}, ...entries(field).map(([fieldName, rules]) => {
            const errorMessage = validator.validate(entries(rules).map(([validateFn, value]) =>
                validator[validateFn](value)))(state.values[fieldName])

            return (errorMessage ? {[fieldName]: errorMessage} : {})
        }))
    ));

    const handleSubmit = (onSubmit) => (event) => {
        event.preventDefault();

        const errors = validateAll();

        if (!isEmpty(errors)) {
            setState((prevState) => ({...prevState, errors, isValid: false}));
            return;
        }

        onSubmit(state);
    }

    return {form: {...state, handleChange}, handleSubmit}
}

export default useForm;