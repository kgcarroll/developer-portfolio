import { EmailTemplate } from 'components/email-template';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'Portfolio Contact Form <admin@kevincarroll.dev>',
    to: ['k_g_carroll@yahoo.com'],
    subject: 'Contact Form Submission',
    react: EmailTemplate({ contactName: 'John Doe', email: 'testing@user.com', subject: 'Email Subject', message: 'Just a message to you.' }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
 