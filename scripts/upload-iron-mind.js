// Upload Iron Mind MP3 to Supabase + cut Hörprobe + copy to Google Drive
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const env = fs.readFileSync(path.join(__dirname, '..', '.env.local'), 'utf8')
  .split('\n').reduce((a, l) => { const i = l.indexOf('='); if (i > 0) a[l.slice(0, i).trim()] = l.slice(i + 1).trim(); return a; }, {});

const { createClient } = require('@supabase/supabase-js');
const supa = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const SRC_128 = 'C:\\Users\\franz\\hypnovital\\hypnovital-audio-generator\\output\\ironmind_v3\\iron-mind.mp3';
const SRC_192 = 'C:\\Users\\franz\\hypnovital\\hypnovital-audio-generator\\output\\ironmind_v3\\hypnovital_ironmind.mp3';
const HOERPROBE_OUT = 'C:\\Users\\franz\\hypnovital\\hypnovital-homepage\\public\\audio\\hoerprobe-iron-mind.mp3';
const GDRIVE_OUT = 'G:\\Meine Ablage\\hypnovital\\output\\hypnovital_iron-mind.mp3';
const FFMPEG = 'C:\\Users\\franz\\ffmpeg\\ffmpeg.exe';

(async () => {
  if (!fs.existsSync(SRC_128)) { console.error('Source MP3 fehlt:', SRC_128); process.exit(1); }
  console.log('Source:', SRC_128, '(', (fs.statSync(SRC_128).size / 1024 / 1024).toFixed(1), 'MB )');

  console.log('\n[1/3] Hörprobe schneiden...');
  fs.mkdirSync(path.dirname(HOERPROBE_OUT), { recursive: true });
  execSync(`"${FFMPEG}" -y -ss 300 -t 30 -i "${SRC_128}" -af "afade=t=in:st=0:d=2,afade=t=out:st=28:d=2" -codec:a libmp3lame -b:a 96k "${HOERPROBE_OUT}"`, { stdio: 'inherit' });
  console.log('  -> Hörprobe:', HOERPROBE_OUT);

  console.log('\n[2/3] Google Drive Backup...');
  fs.mkdirSync(path.dirname(GDRIVE_OUT), { recursive: true });
  fs.copyFileSync(SRC_192, GDRIVE_OUT);
  console.log('  -> GDrive:', GDRIVE_OUT);

  console.log('\n[3/3] Supabase Upload...');
  const buf = fs.readFileSync(SRC_128);
  const { data, error } = await supa.storage.from('audio').upload('audio/iron-mind.mp3', buf, {
    contentType: 'audio/mpeg', upsert: true,
  });
  if (error) { console.error('Supabase ERR:', error); process.exit(1); }
  console.log('  -> Supabase:', data.path);

  console.log('\n=== ALLES FERTIG ===');
})().catch(e => { console.error('FATAL:', e); process.exit(1); });
