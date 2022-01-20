import {assign, entries} from "lodash";

import useValidator from "../hooks/useValidator";

export default function (values, validation){
    const validator = useValidator();

    return assign({}, ...validation.map((field) =>
        assign({}, ...entries(field).map(([fieldName, rules]) => {
            const errorMessage = validator.validate(entries(rules).map(([validateFn, value]) =>
                validator[validateFn](value)))(values[fieldName])

            return (errorMessage ? {[fieldName]: errorMessage} : {})
        }))
    ));
}