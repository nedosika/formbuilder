import React from 'react';

import Field from "./Field";
import useForm from "../hooks/useForm";

const FormBuilder = (props) => {
    const {config: {fields}, onSubmit} = props;
    const {form, handleSubmit} = useForm(
        {
            values: Object.assign({}, ...fields.map((field) => ({[field.name]: field.initialValue || ''}))),
            errors: {},
            isValid: true
        },
        fields.map((field) => ({[field.name]: field.validation}))
    )

    return (<div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {
                fields.map((field) =>
                    <Field
                        {...field}
                        key={field.name}
                        value={form.values[field.name]}
                        error={form.errors[field.name]}
                        onChange={form.handleChange}
                    />
                )
            }
            <input type='submit' disabled={!form.isValid}/>
        </form>
    </div>);
}
export default FormBuilder;