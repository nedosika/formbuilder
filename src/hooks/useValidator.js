const useValidator = (options) => {
    const maxLength = (maxLength, message = 'Too long') => (value) =>
            value.length > maxLength && message

    const minLength = (minLength, message = 'Too short') => (value) =>
            value.length < minLength && message

    const max = (max, message = 'Too big') => (value) =>
            value > max && message

    const min = (min, message = 'Too small') => (value) =>
            value < min && message

    const alphabet = (message = 'Must be a alphabet') => (value) =>
            !/^[a-z]*$/i.test(value) && message

    const required = (message = 'Must be required') => (value) =>
            value.length === 0 && message

    const email = (message = 'Email is wrong') => (value) =>
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) && message

    const number = (message = 'Must be a number') => (value) =>
            /\D/.test(value) && message

    const pattern = (pattern, message = 'Error') => (value) =>
            pattern.test(value) && message

    const validate = (validators) => (value) => {
        let errorMessage = '';

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

    return {minLength, maxLength, max, min, email, required, alphabet, number, pattern, validate};
}

export default useValidator;