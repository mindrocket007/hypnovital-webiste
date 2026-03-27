import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface CustomerEmailProps {
  productTitle: string
  downloadUrl: string
  contractUrl: string
  siteUrl?: string
}

export function CustomerEmail({ productTitle, downloadUrl, contractUrl, siteUrl = 'https://hypnovital.net' }: CustomerEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Dein hypnovital Audio-Programm ist bereit zum Download</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Img
              src={`${siteUrl}/logo-hypnovital.png`}
              width="180"
              alt="hypnovital"
              style={logoImg}
            />
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

          {/* Pattern Interrupt Hinweis */}
          <Heading style={h2}>Hinweis zur Sprachgestaltung</Heading>

          <Text style={text}>
            Unser Audio arbeitet bewusst mit sogenannten Pattern Interrupts – kleine sprachliche
            Überraschungen, die dein Unterbewusstsein besonders aufnahmefähig machen. Aus der
            Forschung wissen wir, dass leicht unerwartete Aussprachen die Aufmerksamkeit auf
            Schlüsselwörter erhöhen und die Trance vertiefen. Es ist also kein Fehler, sondern
            ein gezielt eingesetztes hypnotisches Werkzeug.
          </Text>

          <Hr style={hr} />

          {/* Selbstverpflichtungsvertrag */}
          <Heading style={h2}>Dein Selbstverpflichtungsvertrag</Heading>

          <Text style={text}>
            Im Anhang findest du deinen persönlichen Selbstverpflichtungsvertrag. Studien zeigen,
            dass schriftliche Selbstverpflichtungen die Erfolgsrate um bis zu 40% erhöhen.
          </Text>

          <Text style={text}>
            <strong>Warum ist der Vertrag so wichtig?</strong> Der Selbstverpflichtungsvertrag
            ist ein fester Bestandteil deiner Hypnose-Session. Während der Trance wirst du
            einem inneren Bodyguard begegnen – einer starken, schützenden Gestalt, die dir
            die zum Programm passenden Ziele vorliest und tief in deinem Unterbewusstsein
            verankert. Dein persönlicher Vertrag ergänzt diesen Prozess: Indem du deine
            eigenen Ziele vorher bewusst formulierst und unterschreibst, verstärkst du die
            Wirkung der Hypnose zusätzlich.
          </Text>

          <Text style={text}>
            Du möchtest, dass der Bodyguard genau <strong>deine persönlichen Ziele</strong> vorliest?
            Dann ist ein{' '}
            <Link href="https://www.hypnovital.net/persoenliches-audio" style={link}>
              persönliches Hypnose-Audio
            </Link>{' '}
            das Richtige für dich – individuell auf dich und deine Situation abgestimmt.
          </Text>

          <Text style={text}>
            <strong>So gehst du vor:</strong>
          </Text>

          <Text style={listText}>
            1. Drucke den Vertrag aus{'\n'}
            2. Formuliere deine Ziele konkret und positiv{'\n'}
            3. Schreibe auf, warum dir das Thema wichtig ist und wie du dich fühlst, wenn du dein Ziel erreicht hast{'\n'}
            4. Unterschreibe den Vertrag – das macht ihn verbindlich für dich{'\n'}
            5. Hänge ihn dort auf, wo du ihn täglich siehst (Spiegel, Nachttisch, Kühlschrank)
          </Text>

          <Section style={buttonSection}>
            <Button href={contractUrl} style={buttonSecondary}>
              Selbstverpflichtungsvertrag herunterladen
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

const logoImg = {
  margin: '0 auto',
}

const h1 = {
  color: '#111111',
  fontSize: '24px',
  fontWeight: '700',
  textAlign: 'center' as const,
  marginBottom: '24px',
}

const h2 = {
  color: '#111111',
  fontSize: '18px',
  fontWeight: '700',
  marginBottom: '12px',
}

const text = {
  color: '#444444',
  fontSize: '16px',
  lineHeight: '24px',
  marginBottom: '16px',
}

const listText = {
  color: '#444444',
  fontSize: '16px',
  lineHeight: '28px',
  marginBottom: '16px',
  whiteSpace: 'pre-line' as const,
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

const buttonSecondary = {
  backgroundColor: '#ffffff',
  color: '#84b818',
  fontSize: '16px',
  fontWeight: '700',
  padding: '14px 32px',
  borderRadius: '8px',
  textDecoration: 'none',
  display: 'inline-block',
  border: '2px solid #84b818',
}

const link = {
  color: '#84b818',
  textDecoration: 'underline',
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
