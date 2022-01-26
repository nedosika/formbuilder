export const VALIDATORS = {
    max: "max",
    min: "min",
    email: "email",
    number: "number",
    pattern: "pattern",
    required: "required",
    alphabet: "alphabet",
    minLength: "minLength",
    maxLength: "maxLength",
};

export const VALIDATION_TYPES = {
    validation: 'validation',
    restriction: 'restriction'
}

export const FIELDS = {
    text: {
        type: "Text",
        validators: {
            minLength: VALIDATORS.minLength,
            maxLength: VALIDATORS.maxLength,
            required: VALIDATORS.required,
            pattern: VALIDATORS.pattern
        },
        restrictions: {
            maxLength: VALIDATORS.maxLength,
            pattern: VALIDATORS.pattern
        }
    },
    password: {
        type: 'Password',
        validators: {
            minLength: VALIDATORS.minLength,
            maxLength: VALIDATORS.maxLength,
            required: VALIDATORS.required,
            pattern: VALIDATORS.pattern
        },
        restrictions: {
            maxLength: VALIDATORS.maxLength,
            pattern: VALIDATORS.pattern
        }
    },
    alphabet: {
        type: 'Alphabet',
        validators: {
            minLength: VALIDATORS.minLength,
            maxLength: VALIDATORS.maxLength,
            required: VALIDATORS.required,
            pattern: VALIDATORS.pattern
        },
        restrictions: {
            maxLength: VALIDATORS.maxLength,
            pattern: VALIDATORS.pattern,
            alphabet: VALIDATORS.alphabet
        }
    },
    select : {
        type: 'Select',
        validators: {
            required: VALIDATORS.required,
        }
    },
    number: {
        type: "Number",
        validators: {
            min: VALIDATORS.min,
            max: VALIDATORS.max,
            required: VALIDATORS.required,
            pattern: VALIDATORS.pattern
        },
        restrictions: {
            maxLength: VALIDATORS.maxLength,
            pattern: VALIDATORS.pattern,
            number: VALIDATORS.number
        }
    },
    email: {
        type: "Email",
        validators: {
            required: VALIDATORS.required,
            pattern: VALIDATORS.pattern,
            email: VALIDATORS.email
        },
        restrictions: {
            maxLength: VALIDATORS.maxLength,
            pattern: VALIDATORS.pattern
        }
    },
    textarea: {
        type: "TextArea",
        validators: {
            required: VALIDATORS.required,
            alphabet: VALIDATORS.alphabet,
            pattern: VALIDATORS.pattern
        },
        restrictions: {
            maxLength: VALIDATORS.maxLength,
            alphabet: VALIDATORS.alphabet,
            pattern: VALIDATORS.pattern
        }
    },
    object: {
        type: "Object"
    },
    array: {
        type: "Array",
        validators: {
            alphabet: VALIDATORS.alphabet
        }
    },
    radio: {
        type: "Radio"
    },
    checkbox: {
        type: "CheckBox"
    }
};