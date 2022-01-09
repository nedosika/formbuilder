import React from "react";
import useForm from "./hooks/useForm";

const formInputs = {
    firstName: {value: ''},
    lastName : {value: ''}
}

function App() {
    const {fields, handleSubmit} = useForm(formInputs);
    const {firstName, lastName} = fields;

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input value={firstName.value} onChange={firstName.onChange} />
                <input value={lastName.value} onChange={lastName.onChange} />
                <input type="submit"/>
            </form>
        </div>
    );
}

export default App;
