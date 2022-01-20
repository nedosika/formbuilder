import React from 'react';

import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";

const Field = (props) => {
    const {type, onChange, restriction, validation} = props;

    switch (type) {
        case 'alphabet':
            return <Input {...props} onChange={onChange(validation, {...restriction, alphabet: true})}/>
        case 'number':
            return <Input {...props} onChange={onChange(validation, {...restriction, number: true})}/>
        case 'email':
            return <Input{...props} onChange={onChange({...validation, email: true}, restriction)}/>
        case 'select':
            return <Select {...props} onChange={onChange(validation, restriction)}/>
        case 'textarea':
            return <TextArea {...props} onChange={onChange(validation, restriction)}/>
        default:
            return <Input {...props} onChange={onChange(validation, restriction)}/>
    }
}

export default Field;