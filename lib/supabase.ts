import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Client für Frontend-Nutzung (null wenn Env-Variablen fehlen)
export const supabase = url && anonKey ? createClient(url, anonKey) : null

// Admin-Client für Server-seitige Operationen (z. B. signierte URLs generieren)
export const supabaseAdmin = url && serviceKey
  ? createClient(url, serviceKey, { auth: { persistSession: false } })
  : null

/**
 * Generiert einen signierten Download-Link für eine MP3-Datei.
 * Die Datei muss im Supabase Storage Bucket "audio" liegen.
 * Der Link ist 24 Stunden gültig.
 */
export async function createSignedDownloadUrl(fileKey: string): Promise<string | null> {
  if (!supabaseAdmin) {
    console.warn('SUPABASE_SERVICE_ROLE_KEY fehlt – kein signierter Link möglich')
    // V1-Fallback: direkten Link zurückgeben (nur für Testumgebung)
    const baseUrl = process.env.DOWNLOAD_BASE_URL
    return baseUrl ? `${baseUrl}/${fileKey}` : null
  }

  const { data, error } = await supabaseAdmin.storage
    .from('audio')
    .createSignedUrl(fileKey, 60 * 60 * 24) // 24 Stunden

  if (error || !data?.signedUrl) {
    console.error('Fehler beim Erstellen des signierten Links:', error)
    return null
  }

  return data.signedUrl
}
