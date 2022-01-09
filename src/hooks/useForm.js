import {useState, useCallback} from "react";

const useForm = (initialFields = {}) => {
    const form = Object.assign({}, ...Object.entries(initialFields).map((field) => {
            const name = field[0];
            const value = field[1];

            return {
                [name]: {
                    value: value.value,
                    onChange: (event) => handleInput(name, event)
                },
            }
        })
    );

    const [fields, setState] = useState(form);

    const handleSubmit = (onSubmit) => (event) => {
        event.preventDefault();
        onSubmit({...fields});
    }

    const handleInput = (fieldName, event) => {
        const field = fields[fieldName];
        const value = event.target.value;

        setState((prevState) => ({
            ...prevState,
            [fieldName]: {...field, value}
        }));
    };

    return {fields, handleSubmit}
}

export default useForm;