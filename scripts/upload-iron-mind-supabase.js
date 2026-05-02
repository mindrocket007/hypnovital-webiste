const fs = require('fs');
const path = require('path');
const env = fs.readFileSync(path.join(__dirname, '..', '.env.local'), 'utf8')
  .split('\n').reduce((a, l) => { const i = l.indexOf('='); if (i > 0) a[l.slice(0, i).trim()] = l.slice(i + 1).trim(); return a; }, {});
const { createClient } = require('@supabase/supabase-js');
const supa = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const SRC = 'C:/Users/franz/hypnovital/hypnovital-audio-generator/output/ironmind_v3/iron-mind.mp3';

(async () => {
  const buf = fs.readFileSync(SRC);
  console.log('Size:', (buf.length / 1024 / 1024).toFixed(1), 'MB');
  const { data, error } = await supa.storage.from('audio').upload('audio/iron-mind.mp3', buf, {
    contentType: 'audio/mpeg', upsert: true,
  });
  if (error) { console.error('ERR:', error); process.exit(1); }
  console.log('OK:', data.path);
})().catch(e => { console.error('FATAL:', e); process.exit(1); });
