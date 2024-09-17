import * as React from 'react'

interface EmailTemplateProps {
  contactName: string
  email: string
  subject: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  contactName,
  email,
  subject,
  message,
}) => (
  <div>
    <h1>Contact Form Submission</h1>
    <div>Name: {contactName}</div>
    <div>Email: {email}</div>
    <div>Subject: {subject}</div>
    <div>
      Message: <br />
      <p>{message}</p>
    </div>
  </div>
)
