import React from 'react';

import Fields from "./index";

const Field = (props) => {
    const {type} = props;

    return React.createElement(Fields[type], props)
};

export default Field;