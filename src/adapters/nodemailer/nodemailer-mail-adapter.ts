import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "719a4fa7b0a624",
    pass: "6fcc141e481610"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    transport.sendMail({
      from: 'Equipe feedback <oi@feedget.com>',
      to: 'Vivian Polli <pollivivian@gmail.com>',
      subject: subject,
      html:body
    })
  }
}