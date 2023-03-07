const { constants } = require("../constants")
const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR: 
        res.json({ 
            title: "Validation Failed", 
            message : err.message, 
            stackTrace: err.stack
        });
        break;

        case constants.NOT_FOUND:
            res.json({ 
                title: "Not found",
                message : err.message, 
                stackTrace: err.stack
            });
        case constants.FORBIDDEN:
            res.json({ 
                title: "Forbidden error",
                message : err.message, 
                stackTrace: err.stack
            });
            
        case constants.UNAUTHORIZED:
            res.json({ 
                title: "Not authorize",
                message : err.message, 
                stackTrace: err.stack
            });
        case constants.NOT_FOUND:
            res.json({ 
                title: "Not found",
                message : err.message, 
                stackTrace: err.stack
            });    
        default:
            console.log("No errors, All good!");
            break;


    };
    
};

module.exports = errorHandler;