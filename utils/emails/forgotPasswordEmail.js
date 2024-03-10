import transporter from "../../config/nodemailer.js";

/**
 * Sends an email to the user with the verification link.
 * @param {string} email - The email of the user.
 * @param {string} token - The token to verify the user.
 * @returns {Promise<void>} - A promise that resolves when the email is sent.
 * @throws {Error} - An error if the email could not be sent.
 * @async
 */
const sendForgotPasswordEmail = async (email, token) => {
	try {
		await transporter.sendMail({
            from: `"Residencias Oro Verde" <${process.env.EMAIL_USER}>`,
			to: email,
			subject: "Recuperación de contraseña",
			html: "<h1>Recuperación de contraseña</h1>",
		});
	} catch (error) {
		throw error;
	}
};

export default sendForgotPasswordEmail;
