import express from 'express';
import nodemailer from 'nodemailer';

import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeeddbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "719a4fa7b0a624",
    pass: "6fcc141e481610"
  }
});

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const primaFeedbacksRepository = new PrismaFeedbacksRepository()
  const submitFeedbackUseCase = new SubmitFeeddbackUseCase(primaFeedbacksRepository);

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  })

  // transport.sendMail({
  //   from: 'Equipe feedback <oi@feedget.com>',
  //   to: 'Vivian Polli <pollivivian@gmail.com>',
  //   subject: 'Novo feedback',
  //   html: [
  //     `<div style="font-family: sans-serif; font-size: 16px;">`,
  //     `<p> Tipo do feedback: ${type} </p>`,
  //     `<p> comentário: ${comment} </p>`,
  //     `</div>`
  //   ].join('\n')

  // })

  return res.status(201).send();
})