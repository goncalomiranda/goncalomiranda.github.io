# gmiranda.github.io

Static portfolio site for GitHub Pages.

## Deployments

This repository uses a custom GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

- Trigger: push to `main` (including merges)
- Manual trigger: `workflow_dispatch`
- Deploy target: GitHub Pages

## Local Preview

This site is built with Jekyll. Install dependencies once with `bundle install`,
then run:

```bash
bundle exec jekyll serve --livereload
```

Then browse `http://localhost:4000`. If your system Ruby is too old for Jekyll,
install a newer one via Homebrew (`brew install ruby`) and prepend it to your
`PATH` before running the commands above:

```bash
export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/4.0.0/bin:$PATH"
```

