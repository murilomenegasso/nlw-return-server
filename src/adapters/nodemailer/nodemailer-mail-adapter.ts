import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "46ea3a81732588",
        pass: "5db6691e786448"
    }
});


export class NodemailerMailAdapter implements MailAdapter{
    async sendMail ({subject, body}: SendMailData) {
         await transport.sendMail({
        from: 'Equipe feedback <oi@feedget.com>',
        to: 'Murilo Menegasso <mhmsistemas@gamil.com>',
        subject,
        html: body
    })
    }
}