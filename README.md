# Website

Static site built with [Hugo](https://gohugo.io) from Markdown, published to GitHub
Pages by GitHub Actions on every push to `main`.

## Write

| What | Where |
|------|-------|
| Home page text | `content/_index.md` |
| About page | `content/about.md` |
| Blog posts | `content/posts/<name>.md` |
| Photo galleries | `content/gallery/<event>/` |
| Site title, menu | `hugo.toml` |
| Look and feel | `assets/css/main.css`, `layouts/` |

New post:

```bash
hugo new content posts/my-post.md
```

Posts are created with `draft: true`; remove that line (or set it to `false`) to
publish.

## Photo gallery (event → photos)

Each event is a folder with an `index.md` and its photos:

```
content/gallery/2026-10-25-gurten-classic/
  index.md
  001.jpg
  002.jpg
```

```bash
hugo new content gallery/2026-10-25-gurten-classic/index.md
```

then copy the photos into that folder. The front matter of `index.md`:

```yaml
title: "Gurten Classic"
date: 2026-10-25
location: "Bern"
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
mogrify -resize '2500x2500>' -quality 85 content/gallery/<event>/*.jpg
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
