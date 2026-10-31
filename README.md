# Api Sawera — Graduation Celebration

Developed by **Rana Asad**.

A complete static website celebrating Api Sawera’s MS Data Science and PhD journey. Works on GitHub Pages without a build step, backend, API key or package installation.

## Included

- Responsive layouts for phones and laptops.
- Compact Ajtech.dev credit opens a bilingual developer popup with social links, WhatsApp and email.
- Burgundy, rose-gold and ivory website theme; separate blue/gold developer popup.
- Dark/light mode and Urdu/English controls with remembered preferences.
- Urdu message with right-to-left text and a Nastaliq font.
- BS Mathematics → MS Data Science (2024–2026) → PhD timeline.
- Enhanced photograph, shown in full; click it to open the full-resolution image.
- Your supplied music, with Play/Pause, looping and a gentle starting volume.
- Confetti with reduced-motion support.

## GitHub par upload karne ka tareeqa

1. Is ZIP ko **Extract All** karein. ZIP file ko directly GitHub par upload nahi karna.
2. GitHub mein sign in karke **New repository** banayein. Naam: `api-sawera-graduation`.
3. Free hosting ke liye repository **Public** rakhein. **Create repository** par click karein.
4. Repository mein **uploading an existing file** ya **Add file → Upload files** kholein.
5. Extracted folder ke **andar ki files aur `assets` folder** upload karein. Poora outer folder upload nahi karna: `index.html` seedha repository ke root mein hona chahiye.
6. **Commit changes** karein.
7. Repository ke **Settings → Pages** kholein.
8. **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)** select karke **Save** karein.
9. Pages screen par **Visit site** link aane ka intezar karein; publication mein kuch minutes lag sakte hain.
10. Isi published link ko Api ko send karein. Mobile par music ke liye **Play music** par tap karein.

`.nojekyll` ZIP mein shamil hai. Agar aap ke computer par hidden file nazar na aaye, is plain HTML website ki baqi files phir bhi standard Pages publishing ke saath kaam karti hain.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure |
| `styles.css` | Layout, colors and typography |
| `script.js` | Translations, switches, music, confetti and popup behavior |
| `developer-config.js` | All developer details, social URLs, email, WhatsApp and popup translations |
| `assets/images/sawera-enhanced.png` | Website photograph |
| `assets/audio/celebration-music.mp3` | Background music |
| `assets/fonts/` | Local Urdu font, when bundled |
| `favicon.svg` | Browser icon |

## Preview on your computer

Extract the ZIP and open `index.html` in Chrome, Edge, Firefox or Safari. Keep the files together. For a local web preview, run `python -m http.server 8000` from this folder and open `http://localhost:8000`.

## Change text or assets

- Both Urdu and English messages are inside the `copy` object in `script.js`. Save with UTF-8 encoding.
- To replace the photograph, update its file path and its real width/height in `index.html`, plus its aspect ratio in `styles.css`.
- To replace music, use an MP3 at the same path or update the audio source in `index.html`.
- To change developer contact details, edit only `developer-config.js`. The popup and footer branding read that file automatically. The personal message signature is in `index.html`.
- The developer popup supports its Close button, Escape, outside click and keyboard focus. All contact links open the corresponding service; they do not automatically send a message.
- Paths are relative, so the site works under a GitHub repository URL.

The photograph is an AI-enhanced version, not a source of exact diploma lettering. Music starts after a tap, as required by common mobile browser playback policies.

## Official hosting instructions

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
