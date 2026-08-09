# gmiranda.github.io

Static portfolio site for GitHub Pages.

## Deployments

This repository uses a custom GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

- Trigger: push to `main` (including merges)
- Manual trigger: `workflow_dispatch`
- Deploy target: GitHub Pages

## Local Preview

Open `index.html` directly, or serve the folder with any static server:

```bash
python3 -m http.server 8080
```

Then browse `http://localhost:8080`.
