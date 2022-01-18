import React from 'react';
import {assign} from "lodash";

import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import useValidator from "../hooks/useValidator";

const Field = ({onChange, ...props}) => {
    const validator = useValidator();

    const handleChange = (event) => {
        const value = event.target.value;

        if(validator[props.type] && validator.validate([validator[props.type]()])(value))
            return;

        onChange(event);
    }

    assign(props, {onChange: handleChange});

    switch (props.type) {
        case 'alphabet':
            return <Input {...props}/>
        case 'number':
            return <Input {...props}/>
        case 'select':
            return <Select {...props}/>
        case 'textarea':
            return <TextArea {...props}/>
        default:
            return <Input {...props}/>
    }
}

export default Field;