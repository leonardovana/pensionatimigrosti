# Associazione Pensionati Migros Ticino

Static site built with [Hugo](https://gohugo.io) from Markdown, published to GitHub
Pages by GitHub Actions on every push to `main`.

## Write

| What | Where |
|------|-------|
| Home page text | `content/_index.md` |
| Associazione, Statuto, Comitato | `content/associazione/` |
| Scopo, Privacy Policy | `content/scopo.md`, `content/privacy.md` |
| Notizie | `content/notizie/<name>.md` |
| Foto (one folder per event) | `content/foto/<event>/` |
| PDFs and other files | `static/documenti/` (served at `/documenti/...`) |
| Site title, menu | `hugo.toml` |
| Look and feel | `assets/css/main.css`, `layouts/` |

New post:

```bash
hugo new content notizie/my-post.md
```

Posts are created with `draft: true`; remove that line (or set it to `false`) to
publish.

## Photo gallery (event → photos)

Each event is a folder with an `index.md` and its photos:

```
content/foto/2026-09-22-gita-olivone/
  index.md
  001.jpg
  002.jpg
```

```bash
hugo new content foto/2026-09-22-gita-olivone/index.md
```

then copy the photos into that folder. The front matter of `index.md`:

```yaml
title: "Gita 2026 Olivone"
date: 2026-09-22
location: "Olivone"
cover: "002.jpg"          # optional: photo on the gallery card (default: first)
resources:                # optional captions
  - src: "001.jpg"
    title: "At the start"
```

Photos are shown sorted by file name. Hugo makes the thumbnails and a 2000 px
version for the viewer when the site is built; the originals are never served.
Keyboard arrows and swipe move between photos.

Keep the repository small: resize photos to ~2500 px on the long side before
committing (a GitHub repository should stay well under 1 GB), e.g.

```bash
mogrify -resize '2500x2500>' -quality 85 content/foto/<event>/*.jpg
```

## Preview locally

```bash
hugo server
```

and open <http://localhost:1313>.

## Publish (one-time setup)

1. Create an empty repository on GitHub and push:

   ```bash
   git remote add origin git@github.com:<user>/<repo>.git
   git push -u origin main
   ```

2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

After that, every push to `main` rebuilds and publishes the site at
`https://<user>.github.io/<repo>/` (or your own domain: Settings → Pages → Custom
domain). You can also edit Markdown files directly on github.com; committing there
publishes too.
