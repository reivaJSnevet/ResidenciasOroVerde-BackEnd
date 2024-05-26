import transporter from "../../config/nodemailer.js";
import path from 'path';
import { fileURLToPath } from 'url';

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
        const resetLink = `http://localhost:5173/reset-password?token=${token}`;
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        const emailHtml = `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Restaurar Contraseña</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f0f8ff; margin: 0; padding: 0;">
                <div style="background-image: url('cid:emailBkg'); background-size: cover; padding: 40px 0; text-align: center;">
                    <div style="background-color: rgba(255, 255, 255, 0.9); width: 80%; max-width: 600px; margin: auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                        <div style="background-color: #2e8b57; padding: 20px; text-align: center; color: white; border-radius: 10px 10px 0 0;">
                            <h1 style="margin: 0;">Bienes y Raíces Costa Rica</h1>
                            <p style="margin: 5px 0;">Conectando naturaleza y hogar</p>
                        </div>
                        <div style="padding: 20px;">
                            <h2 style="color: #2e8b57;">Restaurar tu Contraseña</h2>
                            <p style="color: #333;">Hola,</p>
                            <p style="color: #555;">Recibimos una solicitud para restaurar la contraseña de tu cuenta. Haz clic en el siguiente enlace para crear una nueva contraseña:</p>
                            <p style="text-align: center;">
                                <a href="${resetLink}" style="display: inline-block; background-color: #2e8b57; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Restaurar Contraseña</a>
                            </p>
                            <p style="color: #555;">Si no solicitaste un cambio de contraseña, por favor ignora este correo.</p>
                            <p style="color: #333;">Gracias,</p>
                            <p style="color: #2e8b57;">El equipo de Bienes y Raíces Costa Rica</p>
                        </div>
                        <div style="background-color: #dcdcdc; padding: 10px; text-align: center; color: #333; border-radius: 0 0 10px 10px;">
                            <p style="margin: 0; color: #2e8b57;">© 2024 Bienes y Raíces Costa Rica. Todos los derechos reservados.</p>
                            <p style="margin: 5px 0; color: #333;">Calle Principal, San José, Costa Rica</p>
                            <p style="margin: 5px 0;"><a href="#" style="color: #2e8b57; text-decoration: none;">Política de Privacidad</a> | <a href="#" style="color: #2e8b57; text-decoration: none;">Términos de Servicio</a></p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;

        await transporter.sendMail({
            from: `"Residencias Oro Verde" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Recuperación de contraseña",
            html: emailHtml,
            attachments: [
                {
                    filename: 'emailBkg.webp',
                    path: path.join(__dirname, 'emailBkg.webp'), // Ajusta el path según la ubicación de la imagen
                    cid: 'emailBkg' // same cid value as in the html img src
                }
            ]
        });
    } catch (error) {
        throw error;
    }
};

export default sendForgotPasswordEmail;
