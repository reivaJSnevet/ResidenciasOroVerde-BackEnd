import transporter from "../config/nodemailer.js";

export const sendEmail = async ({ from, to, subject, html }) => {
  const mailOptions = {
    from,
    to: `"Residencias Oro Verde" <${process.env.EMAIL_USER}>`,
    subject,
    html,
  };

  return transporter.sendMail(mailOptions);
};

