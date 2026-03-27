import { CustomerEmail } from '@/emails/CustomerEmail'

export default function EmailPreviewPage() {
  return (
    <CustomerEmail
      productTitle="Abnehmen mit Hypnose"
      downloadUrl="https://example.com/download"
      contractUrl="http://localhost:3000/selbstverpflichtungsvertrag.pdf"
      siteUrl="http://localhost:3000"
    />
  )
}
