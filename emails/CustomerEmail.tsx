import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface CustomerEmailProps {
  productTitle: string
  downloadUrl: string
}

export function CustomerEmail({ productTitle, downloadUrl }: CustomerEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Dein hypnovital Audio-Programm ist bereit zum Download</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Text style={logo}>hypnovital</Text>
          </Section>

          <Heading style={h1}>Danke für deinen Kauf!</Heading>

          <Text style={text}>
            Dein Audio-Programm <strong>{productTitle}</strong> steht jetzt für dich bereit.
          </Text>

          <Text style={text}>
            Klicke auf den Button unten, um deinen Download zu starten. Der Link ist 24 Stunden gültig.
          </Text>

          <Section style={buttonSection}>
            <Button href={downloadUrl} style={button}>
              Jetzt herunterladen
            </Button>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Bei Fragen erreichst du uns unter info@hypnovital.net
          </Text>
          <Text style={footer}>
            hypnovital – Mentale Veränderung beginnt im Unterbewusstsein
          </Text>
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

const logoSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
}

const logo = {
  fontSize: '24px',
  fontWeight: '900',
  color: '#84b818',
  margin: '0',
}

const h1 = {
  color: '#111111',
  fontSize: '24px',
  fontWeight: '700',
  textAlign: 'center' as const,
  marginBottom: '24px',
}

const text = {
  color: '#444444',
  fontSize: '16px',
  lineHeight: '24px',
  marginBottom: '16px',
}

const buttonSection = {
  textAlign: 'center' as const,
  marginTop: '32px',
  marginBottom: '32px',
}

const button = {
  backgroundColor: '#84b818',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '700',
  padding: '14px 32px',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'inline-block',
}

const hr = {
  borderColor: '#eaeaea',
  margin: '32px 0 24px',
}

const footer = {
  color: '#999999',
  fontSize: '13px',
  textAlign: 'center' as const,
  marginBottom: '4px',
}
