import allowedOrigins from "./allowedOrigins.js";
import { UnauthorizedError } from "../errors/index.js";
 
/**
 * Configuration options for CORS (Cross-Origin Resource Sharing).
 * @typedef {Object} CorsOptions
 * @property {(string[]|Function)} origin - The allowed origins for CORS requests.
 * @property {number} optionsSuccessStatus - The HTTP status code to be returned for successful CORS preflight requests.
 */
const corsOptions = {
	origin: (origin, callback) => {
		if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new UnauthorizedError("Not allowed by CORS",  { origin }));
		}
	},
    optionsSuccessStatus: 200,
    credentials: true,
};

export default corsOptions;