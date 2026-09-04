---
layout: page
title: Blog Logs
permalink: /tabs/blog/
---

<!-- Direct un-paginated post parsing engine that completely bypasses theme restrictions -->
<div id="post-list" class="flex-grow-1 px-xl-1" markdown="0">
  {% for post in site.posts %}
    <article class="card-wrapper card shadow-none border-bottom my-4 pb-3" style="background: none !important; border-color: var(--card-border-color) !important;">
      <a href="{{ post.url | relative_url }}" class="text-decoration-none d-block">
        <header>
          <h2 class="post-title font-weight-bold" style="color: var(--text-color); font-size: 1.4rem; margin-bottom: 8px; border: none !important;">
            {{ post.title }}
          </h2>
          <div class="post-meta text-muted d-flex flex-wrap align-items-center" style="font-size: 0.85rem; gap: 15px;">
            <div>
              <i class="far fa-calendar fa-fw me-1"></i>
              {{ post.date | date: "%B %d, %Y" }}
            </div>
            {% if post.categories.size > 0 %}
              <div>
                <i class="far fa-folder-open fa-fw me-1"></i>
                {{ post.categories | join: ', ' }}
              </div>
            {% endif %}
          </div>
        </header>
        <div class="post-content text-muted mt-2" style="font-size: 0.95rem; line-height: 1.5;">
          <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
        </div>
      </a>
    </article>
  {% else %}
    <div class="text-center text-muted p-5">
      <i class="fas fa-feather fa-3x mb-3"></i>
      <p>No blog logs have been published to the feed timeline yet. Stay tuned!</p>
    </div>
  {% endfor %}
</div>
