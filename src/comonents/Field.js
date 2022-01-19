import React from 'react';

import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";

const Field = (props) => {
    switch (props.type) {
        case 'alphabet':
            return <Input{...props} restriction={{...props.restriction, alphabet: true}}/>
        case 'number':
            return <Input {...props} restriction={{...props.restriction, number: true}}/>
        case 'email':
            return <Input{...props} validation={{...props.validation, email: true}}/>
        case 'select':
            return <Select {...props}/>
        case 'textarea':
            return <TextArea {...props}/>
        default:
            return <Input {...props}/>
    }
}

export default Field;