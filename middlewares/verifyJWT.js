import { verifySignature } from "../utils/tokens/jwt.js";

const verifyJWT = async (req, res, next) => {
    try {
		const authHeader =
			req.headers.authorization || req.headers.Authorization;
		if (!authHeader?.startsWith("Bearer")) {
			return next();
		}

		const token = authHeader?.split(" ")[1];

		if (!token) {
            return next();
		}

		const decoded = await verifySignature(token, process.env.JWT_SECRET);

		if (!decoded) {
            return next();
		}

        req.isAuthentic = true;

		return next();
	} catch (error) {
		next(error);
	}
};

export default verifyJWT;
