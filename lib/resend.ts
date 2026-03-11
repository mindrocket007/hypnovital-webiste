import { Resend } from 'resend'
import { CustomerEmail } from '@/emails/CustomerEmail'
import { AdminEmail } from '@/emails/AdminEmail'
import React from 'react'

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY ist nicht gesetzt')
}

export const resend = new Resend(process.env.RESEND_API_KEY)

const FROM = process.env.RESEND_FROM_EMAIL || 'noreply@hypnovital.net'
const ADMIN = process.env.ADMIN_NOTIFICATION_EMAIL || 'info@hypnovital.net'

export async function sendCustomerEmail({
  to,
  productTitle,
  downloadUrl,
}: {
  to: string
  productTitle: string
  downloadUrl: string
}) {
  return resend.emails.send({
    from: FROM,
    to,
    subject: 'Dein hypnovital Audio-Programm',
    react: React.createElement(CustomerEmail, { productTitle, downloadUrl }),
  })
}

export async function sendAdminEmail({
  productTitle,
  customerEmail,
  sessionId,
}: {
  productTitle: string
  customerEmail: string
  sessionId: string
}) {
  return resend.emails.send({
    from: FROM,
    to: ADMIN,
    subject: 'Neuer Verkauf bei hypnovital',
    react: React.createElement(AdminEmail, { productTitle, customerEmail, sessionId }),
  })
}
