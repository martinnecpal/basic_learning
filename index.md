---
layout: default
title: Home
---

<section class="hero">
  <h1>{{ site.title }}</h1>
  <p>{{ site.description }}</p>
</section>

<h2>Chapters</h2>

<ul class="chapter-cards">
  {% assign chapters = site.chapters | sort: "order" %}
  {% for chapter in chapters %}
  <li>
    <a class="chapter-card" href="{{ chapter.url | relative_url }}">
      <span class="chapter-index">{{ chapter.order }}</span>
      <h3>{{ chapter.title }}</h3>
      <p>{{ chapter.summary }}</p>
    </a>
  </li>
  {% endfor %}
</ul>
