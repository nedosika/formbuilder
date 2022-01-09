import React from "react";
import useForm from "./hooks/useForm";

const formInputs = {
    firstName: {
        value: 'sss',
        required: true,
        validators: [
            (field) => !field.length && 'Поле обязательно для заполнения',
        ]},
    lastName : {value: ''},
    email: {value: ''}
}

function App() {
    const {fields, isValid, handleSubmit} = useForm(formInputs);
    const {firstName, lastName, email} = fields;

    console.log(fields)

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...firstName} />
                <input {...lastName} />
                <input {...email} />
                <input type="submit"/>
            </form>
        </div>
    );
}

export default App;
