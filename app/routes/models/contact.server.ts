import * as nodemailer from 'nodemailer';
import { ContactFormData } from '../contact';

export default async function sendContactEmail(data: ContactFormData) {
  const appName = process.env.APP_NAME
  const senderEmailUser = process.env.SENDER_EMAIL_USER
  const senderEmailPass = process.env.SENDER_EMAIL_PASS
  const receiverEmail = process.env.RECEIVER_EMAIL

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465 ,
    secure: true, // true for 465, false for other ports, 587 unsecure
    auth: {
      user: senderEmailUser,
      pass: senderEmailPass
    },
  });

  const htmlContent = `A user has filled out the Contact form on your webapp with the following information: <br><br> ${data.name} <br> ${data.email} <br> ${data.phone} <br> ${data.message}`


  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Contact Email Service for the ${appName} Web App." <${senderEmailUser}>`, // sender address
    to: `${receiverEmail}`, // list of receivers
    subject: `A ${appName} site visitor is attempting to make contact. `, // Subject line
    text: "A user has filled out the Contact form on your webapp with the following information:", // plain text body
    html: htmlContent // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

