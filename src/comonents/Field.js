import React from 'react';

import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";

const Field = (props) => {
    switch (props.type) {
        case 'select':
            return <Select {...props}/>
        case 'textarea':
            return <TextArea {...props}/>
        default:
            return <Input {...props}/>
    }
}

export default Field;