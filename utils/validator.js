module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = schema.validate(req.body);
            if (result.error) {
                next(new Error(result.error.details[0].message));
            } else {
                next();
            }
        }
    },
    validateParam: (schema,checkName) => {
        return (req, res, next) => {
            let obj = {};
            obj[`${checkName}`] = req.params[`${checkName}`];
            let result = schema.validate(obj);
            if (result.error) {
                next(new Error(result.error.details[0].message));
            } else {
                next();
            }
        }
    }
}