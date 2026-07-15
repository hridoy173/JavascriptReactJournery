const formatValidationErrors = (issues) => {

    const errors = {};

    issues.forEach((issue) => {
        const field = issue.path[1];

        errors[field] = issue.message;
    });

    return errors;
};

module.exports = formatValidationErrors;