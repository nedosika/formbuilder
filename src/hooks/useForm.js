import {useState} from "react";

const useForm = (initialFields = {}) => {
    const handleSubmit = (onSubmit) => (event) => {
        event.preventDefault();
        onSubmit();
    }

    const [fields, setState] = useState({...initialFields});

    const handleInput = (event) => {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: {
                value: event.target.value
            }
        }));
    }

    return {fields, handleInput, handleSubmit}
}

export default useForm;