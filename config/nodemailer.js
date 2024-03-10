import nodemailer from "nodemailer";

/**
 * The transporter object for sending emails.
 *
 * @type {import('nodemailer').Transporter}
 */
const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: process.env.EMAIL_PORT,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

export default transporter;