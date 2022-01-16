const useValidator = (options) => {
    const maxLength = (maxLength, message = 'Too long') => (value) => {
        return value.length > maxLength && message
    }

    const minLength = (minLength, message = 'Too short') => (value) => {
        return value.length < minLength && message
    }

    const max = (max, message = 'Too big') => (value) => {
        return value > max && message
    }

    const min = (min, message = 'Too small') => (value) => {
        return value < min && message
    }

    const string = (message = 'Must be a string') => (value) => {
        return !/^[a-zA-Z]+$/.test(value) && message
    }

    const required = (message = 'Must be required') => (value) => {
        return value.length === 0 && message
    }

    const email = (message = 'Email is wrong') => (value) => {
        return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) && message
    }

    const number = (message = 'Must be a number') => (value) => {
        return /\D/.test(value) && message
    }

    const pattern = (pattern, message = 'Error') => (value) => {
        return pattern.test(value) && message
    }

    const validate = (validators) => (value) => {
        let errorMessage;

        const result = validators
            .map((validator) => {
                const result = validator(value);
                return typeof result === 'string' ? result : '';
            })
            .filter(message => message !== '');

        if (result.length)
            errorMessage = result[0];

        return errorMessage;
    }

    return {minLength, maxLength, max, min, email, required, string, number, pattern, validate};
}

export default useValidator;