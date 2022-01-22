import React from 'react';

import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import {VALIDATORS} from "../hooks/useValidator";

const Field = (props) => {
    const {type, restriction, validation} = props;

    switch (type) {
        case 'alphabet':
            return <Input {...props} restriction={{...restriction, alphabet: true}}/>;
        case 'number':
            return <Input {...props} restriction={{...restriction, number: true}}/>;
        case 'email':
            return <Input{...props} validation={{...validation, email: true}}/>;
        case 'select':
            return <Select {...props}/>;
        case 'textarea':
            return <TextArea {...props}/>;
        default:
            return <Input {...props} />;
    }
};

export default Field;