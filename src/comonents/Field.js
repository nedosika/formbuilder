import React from 'react';

import {FIELDS} from "../constants";

import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";


const Field = (props) => {
    const {type, restriction, validation} = props;

    switch (type) {
        case FIELDS.alphabet.type:
            return <Input {...props} restriction={{...restriction, [FIELDS.alphabet.restrictions.alphabet]: true}}/>;
        case FIELDS.number.type:
            return <Input {...props} restriction={{...restriction, [FIELDS.number.restrictions.number]: true}}/>;
        case FIELDS.email.type:
            return <Input{...props} validation={{...validation, [FIELDS.email.validators.email]: true}}/>;
        case FIELDS.select.type:
            return <Select {...props}/>;
        case FIELDS.textarea.type:
            return <TextArea {...props}/>;
        default:
            return <Input {...props} />;
    }
};

export default Field;