import React from 'react';

import Input from "./Input";
import {FIELDS} from "../../constants";

const Email = (props) => {
    const {validation} = props;

    return (
        <Input
            {...props}
            validation={{...validation, [FIELDS.email.validators.email]: true}}
        />
    );
};

export default Email;