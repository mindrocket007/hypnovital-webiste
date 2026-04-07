// Spam-Schutz: Honeypot, Rate Limiting, Gibberish-Erkennung

// --- Rate Limiting (in-memory, pro IP) ---
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW = 10 * 60 * 1000 // 10 Minuten
const RATE_LIMIT_MAX = 3 // max 3 Anfragen pro Fenster

export function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return false
  }

  entry.count++
  if (entry.count > RATE_LIMIT_MAX) {
    return true
  }

  return false
}

// --- Gibberish-Erkennung ---
// Prüft ob ein String hauptsächlich aus zufälligen Zeichen besteht
export function isGibberish(text: string): boolean {
  if (!text || text.length < 5) return false

  const clean = text.trim()

  // Keine Leerzeichen in einem langen String = verdächtig
  if (clean.length > 8 && !clean.includes(' ')) {
    // Konsonanten-Cluster zählen (3+ Konsonanten hintereinander)
    const consonantClusters = clean.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{4,}/g)
    if (consonantClusters && consonantClusters.length > 0) return true

    // Mix aus Gross/Klein ohne Muster = verdächtig
    const upperCount = (clean.match(/[A-Z]/g) || []).length
    const lowerCount = (clean.match(/[a-z]/g) || []).length
    if (upperCount > 2 && lowerCount > 2 && clean.length > 10) {
      const ratio = upperCount / (upperCount + lowerCount)
      if (ratio > 0.25 && ratio < 0.75) return true
    }
  }

  return false
}

// --- Honeypot-Check ---
export function isHoneypotFilled(value: unknown): boolean {
  return typeof value === 'string' && value.length > 0
}

// --- Gesamt-Check ---
export function checkSpam(body: Record<string, unknown>, ip: string): { blocked: boolean; reason?: string } {
  // Honeypot
  if (isHoneypotFilled(body.website)) {
    return { blocked: true, reason: 'honeypot' }
  }

  // Rate Limiting
  if (isRateLimited(ip)) {
    return { blocked: true, reason: 'rate-limit' }
  }

  // Gibberish im Namen oder Nachricht
  if (isGibberish(body.name as string) || isGibberish(body.message as string)) {
    return { blocked: true, reason: 'gibberish' }
  }

  // Gibberish im Firmennamen
  if (body.company && isGibberish(body.company as string)) {
    return { blocked: true, reason: 'gibberish' }
  }

  return { blocked: false }
}
