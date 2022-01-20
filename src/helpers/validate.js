import {entries} from "lodash";

import useValidator from "../hooks/useValidator";

export default function (field){
    const validator = useValidator();

    const errorMessage = validator.validate(entries(field.validation).map(([validateFn, value]) =>
        validator[validateFn](value)))(field.value);

    return (errorMessage ? {[field.name]: errorMessage} : {})
}