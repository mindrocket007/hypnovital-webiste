import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface AdminEmailProps {
  productTitle: string
  customerEmail: string
  sessionId: string
}

export function AdminEmail({ productTitle, customerEmail, sessionId }: AdminEmailProps) {
  const timestamp = new Date().toLocaleString('de-CH', { timeZone: 'Europe/Zurich' })

  return (
    <Html>
      <Head />
      <Preview>Neuer Verkauf: {productTitle}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Neuer Verkauf bei hypnovital</Heading>

          <Section style={infoBox}>
            <Text style={label}>Produkt</Text>
            <Text style={value}>{productTitle}</Text>

            <Text style={label}>Kunden-E-Mail</Text>
            <Text style={value}>{customerEmail}</Text>

            <Text style={label}>Zeitpunkt</Text>
            <Text style={value}>{timestamp}</Text>

            <Text style={label}>Stripe Session ID</Text>
            <Text style={valueSmall}>{sessionId}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>hypnovital Admin-Benachrichtigung</Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f5f5f5',
  fontFamily: "'Lato', Arial, sans-serif",
}

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '560px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
}

const h1 = {
  color: '#111111',
  fontSize: '22px',
  fontWeight: '700',
  marginBottom: '24px',
}

const infoBox = {
  backgroundColor: '#f5f5f5',
  borderRadius: '6px',
  padding: '20px',
}

const label = {
  color: '#888888',
  fontSize: '12px',
  fontWeight: '700',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  margin: '12px 0 2px',
}

const value = {
  color: '#111111',
  fontSize: '16px',
  margin: '0 0 8px',
}

const valueSmall = {
  color: '#555555',
  fontSize: '13px',
  fontFamily: 'monospace',
  margin: '0 0 8px',
  wordBreak: 'break-all' as const,
}

const hr = {
  borderColor: '#eaeaea',
  margin: '32px 0 24px',
}

const footer = {
  color: '#999999',
  fontSize: '13px',
  textAlign: 'center' as const,
}
