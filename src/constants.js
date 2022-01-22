export const VALIDATORS = {
    minLength: "minLength",
    maxLength: "maxLength",
    max: "max",
    min: "min",
    email: "email",
    required: "required",
    alphabet: "alphabet",
    number: "number",
    pattern: "pattern",
};

export const FIELDS = {
    text: {
        type: "text",
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
        type: 'password',
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
        type: 'alphabet',
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
    select : {
        type: 'select',
        validators: {
            required: VALIDATORS.required,
        }
    },
    number: {
        type: "number",
        validators: {
            min: VALIDATORS.min,
            max: VALIDATORS.max,
            required: VALIDATORS.required,
            pattern: VALIDATORS.pattern
        },
        restrictions: {
            maxLength: VALIDATORS.maxLength,
            pattern: VALIDATORS.pattern
        }
    },
    email: {
        type: "email",
        validators: {
            required: VALIDATORS.required,
            pattern: VALIDATORS.pattern
        },
        restrictions: {
            maxLength: VALIDATORS.maxLength,
            pattern: VALIDATORS.pattern
        }
    },
    textarea: {
        type: "textarea",
        validators: {
            required: VALIDATORS.required,
            pattern: VALIDATORS.pattern
        },
        restrictions: {
            maxLength: VALIDATORS.maxLength,
            alphabet: VALIDATORS.alphabet,
            pattern: VALIDATORS.pattern
        }
    }
};