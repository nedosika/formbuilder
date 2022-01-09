import {useState} from "react";

const useForm = (initialFields = {}) => {
    const form = Object.assign({},
        ...Object.entries(initialFields).map((field) => {
            const name = field[0];
            const value = field[1];

            return {
                [name]: {
                    value: value.value,
                    validators: value.validators,
                    onChange: (event) => handleInput(name, event)
                },
            }
        })
    );

    const [fields, setState] = useState(form);
    const [isValid, setFormValid] = useState(true);

    const validateField = (field) => {
        let isValid = true, errorMessage = '';
        const {value, validators} = field;

        const results = validators?.map((validator) => {
                const result = validator(value);
                return typeof result === 'string' ? result : '';
            })
            .filter(message => message !== '');

        if (results?.length) {
            isValid = false;
            errorMessage = results[0];
        }

        return {...field, isValid, errorMessage}
    }

    const handleInput = (fieldName, event) => {
        const field = fields[fieldName];
        const value = event.target.value;
        const validatedField = validateField({...field, value});

        setState((prevState) => ({
            ...prevState,
            [fieldName]: {...validatedField, value}
        }));
    };

    const handleSubmit = (onSubmit) => (event) => {
        event.preventDefault();
        onSubmit({...fields});
    }

    return {fields, isValid, handleSubmit}
}

export default useForm;