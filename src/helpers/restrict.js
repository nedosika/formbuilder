import useValidator from "../hooks/useValidator";
import {entries} from "lodash";

export default function (value, restriction) {
    const validator = useValidator();

    return validator.validate(entries(restriction).map(([validateFn, value]) =>
        validator[validateFn](value)))(value)
}