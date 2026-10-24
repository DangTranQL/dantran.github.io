# Dang Tran — Portfolio

Personal portfolio site built from the [developerFolio](https://github.com/saadpasta/developerFolio) template (React).

## Edit content

Almost everything lives in [`src/portfolio.js`](src/portfolio.js): greeting, skills, education, experience, projects, awards and contact info. Each section has a `display` flag to show or hide it.

- Resume download: replace `src/containers/greeting/resume.pdf`
- Logos: `src/assets/images/*Logo.png` (placeholder monograms — swap in real logos with the same file names)
- Colors: `src/_globalColor.scss`
- Open Source section: shows your **pinned** GitHub repositories, fetched at build time

## Run locally

Requires [Node.js](https://nodejs.org/) 18 or 20.

```bash
npm install
npm start          # http://localhost:3000
```

To load pinned GitHub repos locally, copy `env.example` to `.env` and fill in a GitHub token and username (`.env` is git-ignored).

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
One-time setup: in the repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

## License

Template © saadpasta, licensed under GPL-3.0 (see [LICENSE](LICENSE)).
