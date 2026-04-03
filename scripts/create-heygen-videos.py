"""Erstellt 5 HeyGen-Videos für den Stressmanagement-Kurs via API."""
import os, sys, json, time, requests
sys.stdout.reconfigure(encoding='utf-8')

API_KEY = "sk_V2_hgu_khsFU6IgB1y_OC7dZq1yF2InKjyeM4FL2u3RMkZNSDmR"
AVATAR_ID = "Amelia_standing_business_training_front"
VOICE_ID = "ec0cfc2316084a1bb3e138b14837fa0c"  # Lea Brandt, German, female

HEADERS = {
    "X-Api-Key": API_KEY,
    "Content-Type": "application/json",
}

SCRIPTS_DIR = os.path.join(os.path.dirname(__file__), "..", "docs", "academy-skripte")

LESSONS = [
    ("lektion-1-was-ist-stress.txt", "Stressmanagement – Lektion 1: Was ist Stress wirklich?"),
    ("lektion-2-stressoren-erkennen.txt", "Stressmanagement – Lektion 2: Stressoren erkennen"),
    ("lektion-3-koerperliche-reaktionen.txt", "Stressmanagement – Lektion 3: Körperliche Stressreaktionen"),
    ("lektion-4-mentale-strategien.txt", "Stressmanagement – Lektion 4: Mentale Strategien"),
    ("lektion-5-nachhaltig-reduzieren.txt", "Stressmanagement – Lektion 5: Stress nachhaltig reduzieren"),
]


def clean_script(text):
    """Entfernt [PAUSE Xs] Marker und den Titel in der ersten Zeile."""
    import re
    lines = text.strip().split('\n')
    # Erste Zeile ist der Titel, überspringen
    if lines and not lines[0].startswith('['):
        lines = lines[1:]
    cleaned = '\n'.join(lines).strip()
    # [PAUSE Xs] durch einfache Pause ersetzen (HeyGen nutzt eigene Pausen)
    cleaned = re.sub(r'\[PAUSE\s+\d+s\]', '', cleaned)
    # Mehrfache Leerzeilen reduzieren
    cleaned = re.sub(r'\n{3,}', '\n\n', cleaned)
    return cleaned.strip()


def create_video(script_file, title):
    """Erstellt ein Video via HeyGen API v2."""
    filepath = os.path.join(SCRIPTS_DIR, script_file)
    with open(filepath, 'r', encoding='utf-8') as f:
        raw_text = f.read()

    text = clean_script(raw_text)
    print(f"\n{'='*60}")
    print(f"Video erstellen: {title}")
    print(f"Skript: {len(text)} Zeichen")
    print(f"{'='*60}")

    payload = {
        "video_inputs": [
            {
                "character": {
                    "type": "avatar",
                    "avatar_id": AVATAR_ID,
                    "avatar_style": "normal",
                },
                "voice": {
                    "type": "text",
                    "input_text": text,
                    "voice_id": VOICE_ID,
                    "speed": 0.95,
                },
            }
        ],
        "dimension": {
            "width": 1920,
            "height": 1080,
        },
        "title": title,
    }

    resp = requests.post(
        "https://api.heygen.com/v2/video/generate",
        headers=HEADERS,
        json=payload,
    )

    if resp.status_code != 200:
        print(f"FEHLER: {resp.status_code}")
        print(resp.text)
        return None

    data = resp.json()
    video_id = data.get("data", {}).get("video_id")
    if video_id:
        print(f"Video-ID: {video_id}")
        print("Status: In Bearbeitung...")
    else:
        print(f"Unerwartete Antwort: {json.dumps(data, indent=2)}")
    return video_id


def check_status(video_id):
    """Prüft den Status eines Videos."""
    resp = requests.get(
        f"https://api.heygen.com/v1/video_status.get?video_id={video_id}",
        headers=HEADERS,
    )
    if resp.status_code != 200:
        return None, None
    data = resp.json().get("data", {})
    return data.get("status"), data.get("video_url")


def wait_for_videos(video_ids):
    """Wartet bis alle Videos fertig sind."""
    pending = {vid: title for vid, title in video_ids.items()}
    results = {}

    print(f"\n{'='*60}")
    print(f"Warte auf {len(pending)} Videos...")
    print(f"{'='*60}\n")

    while pending:
        time.sleep(30)
        for vid in list(pending.keys()):
            status, url = check_status(vid)
            if status == "completed":
                print(f"FERTIG: {pending[vid]}")
                print(f"  URL: {url}")
                results[vid] = {"title": pending[vid], "url": url}
                del pending[vid]
            elif status == "failed":
                print(f"FEHLER: {pending[vid]}")
                del pending[vid]
            else:
                print(f"  ... {pending[vid]}: {status}")

    return results


if __name__ == "__main__":
    print("HeyGen Video-Erstellung für Stressmanagement-Kurs")
    print(f"Avatar: {AVATAR_ID}")
    print(f"Stimme: Lea Brandt (deutsch, weiblich)")

    video_ids = {}

    for script_file, title in LESSONS:
        vid = create_video(script_file, title)
        if vid:
            video_ids[vid] = title
        time.sleep(2)  # Kurze Pause zwischen API-Calls

    if not video_ids:
        print("\nKeine Videos erstellt. Überprüfe API Key und Quota.")
        sys.exit(1)

    print(f"\n{len(video_ids)} Videos in Bearbeitung. Warte auf Fertigstellung...")
    results = wait_for_videos(video_ids)

    # Ergebnisse speichern
    output_file = os.path.join(SCRIPTS_DIR, "video-urls.json")
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print(f"\n{'='*60}")
    print(f"ALLE VIDEOS FERTIG!")
    print(f"URLs gespeichert in: {output_file}")
    print(f"{'='*60}")

    for vid, info in results.items():
        print(f"  {info['title']}")
        print(f"  → {info['url']}\n")
