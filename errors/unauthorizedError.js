import CustomError from "./customError.js";

/**
 * Represents an Unauthorized Error.
 * @class
 * @extends CustomError
 */
class UnauthorizedError extends CustomError {
    /**
     * Creates an instance of UnauthorizedError.
     * @constructor
     * @param {string} resource - The resource that the user is unauthorized to access.
     * @param {string} token - The token used for authentication.
     */
    constructor(resource, token) {
        const message = "Authentication failed. We couldn't verify your credentials. Please try again.";
        super("UnauthorizedError", message, 401);
        this.resource = resource;
        this.token = token;
    }
}

export default UnauthorizedError;
