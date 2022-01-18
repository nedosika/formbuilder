import React from 'react';
import String from "./String";
import Select from "./Select";

const Field = (props) => {
    switch (props.type){
        case 'text':
            return <String {...props}/>
        case 'select':
            return <Select {...props}/>
        case 'textarea':
            return <textarea {...props}/>
        default: return null
    }
};

export default Field;