import transporter from "../../config/nodemailer.js";

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
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Correo de Bienvenida</title>
            <style>
                body {
                    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    background-color: white; 
                }
                .header {
                    background-color: #4e702d; 
                    padding: 20px;
                    text-align: center;
                    color: #ffffff; 
                }
                .container {
                    margin: 50px auto;
                    text-align: center;
                }
                .card {
                background-color: #ffffff; 
                padding: 40px;
                border-radius: 20px;
                box-shadow: 0 0 20px rgba(85, 138, 51, 0.692); 
                max-width: 400px;
                margin: 10px auto ;
            }
                .card img {
                    max-width: 300px;
                    margin-bottom: 20px;
                }
                .btn {
                    display: inline-block;
                    background-color: #298105da; 
                    color: #ffffff; 
                    text-decoration: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    margin-top: 20px;
                }
            
            </style>
            </head>
            <body>
            <div class="header">
                <h2>Te damos la bienvenida a Residencias Oro Verde</h2>
            </div>
            <div class="container">
                <div class="card">
                    <img src="https://static.vecteezy.com/system/resources/previews/006/631/114/non_2x/closed-white-envelope-with-bright-colorful-green-summer-foliage-in-the-background-the-concept-of-sending-a-message-send-or-receive-a-letter-mail-vector.jpg" alt="Imagen de una carta" /> <!-- Ruta o URL de la imagen -->
                    <p>¡Gracias por unirte a nuestra comunidad de bienes raíces!</p>
                
                       <p>Por favor, haz clic en el botón de abajo para verificar tu cuenta y comenzar a explorar todas las oportunidades que tenemos para ti.</p> 
            
                     <a href="${"residenciasoroverde-backend-production.up.railway.app"}/api/auth/confirm-email/${token}">Verificar cuenta</a>
                </div>
            </div>
            </body>
            </html>`,
        });
    } catch (error) {
        throw error;
    }
};

export default sendVerificationEmail;
