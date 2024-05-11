import { verifySignature } from "../utils/tokens/jwt.js";
import { UnauthorizedError } from "../errors/index.js";

const requireJWT = async (req, res, next) => {
    try {
		const authHeader =
			req.headers.authorization || req.headers.Authorization;
        const resource = req.originalUrl;
		if (!authHeader?.startsWith("Bearer")) {
			throw new UnauthorizedError(
				`${resource}: VerifyJWT startWithBearer`,
                authHeader
			);
		}

		const token = authHeader.split(" ")[1];

		if (!token) {
			throw new UnauthorizedError(
				`${resource}: VerifyJWT noToken`,
				token,
			);
		}

		const decoded = await verifySignature(token, process.env.JWT_SECRET);

		if (!decoded) {
			throw new UnauthorizedError(
				`${resource}: VerifyJWT decode`,
				token,
			);
		}

		req.usuario = decoded.usuario;
		req.rol = decoded.rol;

		next();
	} catch (error) {
		next(error);
	}
};

export default requireJWT;
