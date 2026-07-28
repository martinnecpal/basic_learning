# basic_learning

Study material to explain the basics of algebra, vectors, tensors and matrix
operations, etc. Must-know material before learning modeling and simulation
of forming processes.

This is a static [Jekyll](https://jekyllrb.com/) site with a collapsible
chapter menu on the left and one page per chapter (`_chapters/`).

## Running locally

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Adding a chapter

Add a new Markdown file to `_chapters/` with front matter like:

```yaml
---
title: My New Chapter
slug: my-new-chapter
order: 5
summary: One sentence describing the chapter.
mathjax: true
sections:
  - id: some-heading
    title: Some Heading
---
```

Each entry in `sections` should match the auto-generated id of a `##`
heading in the chapter body (kramdown lowercases the heading and replaces
spaces with dashes), so the sidebar can deep-link to it and show/hide the
chapter's sub-sections.

## Deploying to GitHub Pages

A workflow at `.github/workflows/pages.yml` builds and deploys the site on
every push to `main`. Enable it once under the repository's
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

If the site is served from a project path such as
`https://<user>.github.io/basic_learning/`, set `baseurl: "/basic_learning"`
in `_config.yml`.
