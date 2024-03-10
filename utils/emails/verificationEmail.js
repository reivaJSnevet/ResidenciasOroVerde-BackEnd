import transporter from "../../config/nodemailer.js"

/**
 * Sends an email to the user with the verification link.
 * @async
 * @param {string} email - The email of the user.
 * @param {string} token - The token to verify the user.
 * @returns {Promise<void>} - A promise that resolves when the email is sent.
 * @throws {Error} - An error if the email could not be sent.
 */
const sendVerificationEmail = async (email, token) => {
    try {
        await transporter.sendMail({
            from: `"Residencias Oro Verde" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Verifica tu cuenta",
            html: "<h1>Verifica tu cuenta</h1>" //aqui van el html con el link de verificacion
        });
    }
    catch (error) {
        throw error;
    }
}

export default sendVerificationEmail;