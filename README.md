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

`_config.yml` sets `baseurl: "/basic_learning"` to match the deployed
project page, so the dev server serves under that same path too — open
<http://localhost:4000/basic_learning/> (not the bare root).

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

The site is currently published from this branch directly (**Settings →
Pages → Build and deployment → Source: Deploy from a branch**), served at
`https://martinnecpal.github.io/basic_learning/`.

There is also a workflow at `.github/workflows/pages.yml` that builds and
deploys on every push to `main`, for when this branch is merged and Pages
is switched to **Source: GitHub Actions** instead.

If the site is ever moved to a user/org root site
(`https://<user>.github.io/`) instead of a project path, change `baseurl`
back to `""` in `_config.yml`.
