import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../../errors/index.js";

/**
 * Generates an access token for the given user.
 * @param {object} user - The user object.
 * @param {string} user.name - The name of the user.
 * @param {object} user.Role - The role object of the user.
 * @param {string} user.Role.name - The name of the role.
 * @returns {string} - The generated access token.
 * @throws {Error} - If an error occurs during token generation.
 */
const generateAccessToken = (user) => {
	try {
		const accessToken = jwt.sign(
			{
				user: user.name,
				role: user.Role.name,
			},
			process.env.JWT_SECRET,
			{
				expiresIn: "30m", //Change to 15m in production
			},
		);
		return accessToken;
	} catch (error) {
		throw error;
	}
};

/**
 * Generates a refresh token for a user.
 * @param {Object} user - The user object.
 * @param {string} user.name - The username of the user.
 * @param {Object} user.Role - The role object of the user.
 * @param {string} user.Role.name - The name of the role.
 * @returns {string} - The generated refresh token.
 * @throws {Error} - If an error occurs while generating the refresh token.
 */
const generateRefreshToken = (user) => {
	try {
		const refreshToken = jwt.sign(
			{
				user: user.name,
				role: user.Role.name,
			},
			process.env.JWT_REFRESH_SECRET,
			{
				expiresIn: "1h",
			},
		);
		return refreshToken;
	} catch (error) {
		throw error;
	}
};

/**
 * Verifies the signature of a JSON Web Token (JWT) using the provided secret.
 * @param {string} token - The JWT to verify.
 * @param {string} secret - The secret used to sign the JWT.
 * @returns {Promise<object>} - A promise that resolves with the decoded payload of the JWT if the signature is valid, or rejects with an error if the signature is invalid.
 */
const verifySignature = (token, secret) => {
	try {
		return new Promise((resolve, reject) => {
			jwt.verify(token, secret, (err, decoded) => {
				if (err) {
                    console.log(err.message);
					reject(new UnauthorizedError("jwt verifySignature", token));
				} else {
					resolve(decoded);
				}
			});
		});
	} catch (error) {
		throw error;
	}
};

export { generateAccessToken, generateRefreshToken, verifySignature };
