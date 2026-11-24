# JaeForge — developer studio site

The public portfolio site for **JaeForge**, Elliott Hornick's app studio:
released and in-progress apps, a short about section, and links out to
support and privacy. Plain static HTML/CSS/JS — no build step, no external
fonts, no trackers, no CDN dependencies.

## Files

- `index.html` — the whole site (single page)
- `styles.css` — dark neon-tile theme (cyan / magenta / yellow on black)
- `script.js` — progressive-enhancement reveal animation only; the page is
  fully readable with JavaScript off
- `assets/icons/` — app icons at 512px, copied from the app icon masters
  (GamR's `gamr.png` is a drawn placeholder tile until the real icon exists)
- `CNAME` — `jaeforge.com` (GitHub Pages custom domain)

## How it's published

GitHub Pages from a dedicated repo (separate from the `app-support` repo,
which keeps hosting privacy/support/app-ads.txt — this site only links to
those pages, it does not host them).

## Pre-publish checklist

1. Buy/confirm the domain `jaeforge.com` at the registrar (~$12/yr).
2. Create a new GitHub repo for the site and push this directory as its root.
3. In the repo: Settings → Pages → deploy from the default branch (root).
4. Settings → Pages → Custom domain: `jaeforge.com` (the `CNAME` file in the
   repo root already carries it).
5. At the registrar, point DNS at GitHub Pages:
   - Apex `jaeforge.com`: A records to `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153` (and AAAA records if using IPv6).
   - Optional `www`: CNAME record to `<github-username>.github.io`.
6. Wait for DNS to propagate, then in Settings → Pages tick **Enforce HTTPS**
   once the certificate is issued.
7. Open https://jaeforge.com and click through: hero, all six app cards,
   Support and Privacy links (they land on the app-support pages), and the
   footer mailto.

## Updating

Edit the files, commit, push — Pages redeploys automatically. App statuses
live in `index.html` (the badge on each app card); flip them as apps move
from In Development → In Review → On the App Store.

## Credits

Elliott Hornick — Creator, design & direction · Spark-e — Lead Programmer

© 2026 Elliott Hornick
