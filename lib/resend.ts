import { Resend } from 'resend'
import { CustomerEmail } from '@/emails/CustomerEmail'
import { AdminEmail } from '@/emails/AdminEmail'
import React from 'react'

export function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY ist nicht gesetzt')
  }
  return new Resend(process.env.RESEND_API_KEY)
}

// Lazy export – crasht nicht beim Build wenn Key fehlt
export const resend = new Proxy({} as Resend, {
  get(_, prop) {
    return (getResend() as unknown as Record<string | symbol, unknown>)[prop]
  },
})

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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hypnovital.net'
  const contractUrl = `${siteUrl}/selbstverpflichtungsvertrag.pdf`

  return getResend().emails.send({
    from: FROM,
    to,
    subject: 'Dein hypnovital Audio-Programm',
    react: React.createElement(CustomerEmail, { productTitle, downloadUrl, contractUrl, siteUrl }),
  })
}

export async function sendElearningAccessEmail({
  to,
  firstName,
  courseTitle,
  accessToken,
}: {
  to: string
  firstName: string
  courseTitle: string
  accessToken: string
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hypnovital.net'
  const accessUrl = `${siteUrl}/academy/start?token=${accessToken}`

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 20px;">
    <div style="background:#ffffff;border-radius:16px;padding:40px 32px;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
      <div style="text-align:center;margin-bottom:32px;">
        <span style="font-size:20px;font-weight:800;color:#1a1a1a;">hypnovital<sup style="font-size:10px;">&reg;</sup></span>
      </div>
      <p style="color:#333;font-size:16px;line-height:1.6;margin:0 0 16px;">
        Hallo ${firstName},
      </p>
      <p style="color:#333;font-size:16px;line-height:1.6;margin:0 0 24px;">
        Vielen Dank f&uuml;r deinen Kauf! Dein E-Learning-Kurs &laquo;${courseTitle}&raquo; steht ab sofort f&uuml;r dich bereit.
      </p>
      <div style="text-align:center;margin:32px 0;">
        <a href="${accessUrl}" style="display:inline-block;background:#7ab82e;color:#ffffff;text-decoration:none;font-weight:700;font-size:16px;padding:14px 32px;border-radius:12px;">
          Kurs starten
        </a>
      </div>
      <p style="color:#666;font-size:14px;line-height:1.6;margin:0 0 8px;">
        Dieser Link ist pers&ouml;nlich und nur f&uuml;r dich bestimmt. Du kannst jederzeit pausieren und sp&auml;ter weitermachen.
      </p>
      <p style="color:#999;font-size:13px;line-height:1.6;margin:24px 0 0;padding-top:20px;border-top:1px solid #eee;">
        Bei Fragen: <a href="mailto:info@hypnovital.net" style="color:#7ab82e;text-decoration:none;">info@hypnovital.net</a>
      </p>
    </div>
  </div>
</body>
</html>`

  return getResend().emails.send({
    from: FROM,
    to,
    subject: `Dein E-Learning-Kurs: ${courseTitle}`,
    html,
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
  return getResend().emails.send({
    from: FROM,
    to: ADMIN,
    subject: 'Neuer Verkauf bei hypnovital',
    react: React.createElement(AdminEmail, { productTitle, customerEmail, sessionId }),
  })
}
