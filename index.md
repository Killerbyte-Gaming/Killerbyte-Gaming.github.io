---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: home
---

<h3 class="feed-title">Latest Videos</h3>
<div class="video-grid">
  {% for video in site.data.youtube limit: 3 %}
    <div class="video-card">
      <a href="{{ video.link }}" target="_blank" rel="noopener noreferrer">
        <div class="thumbnail-wrapper">
          <img src="https://youtube.com{{ video.id }}/mqdefault.jpg" alt="{{ video.title }}">
        </div>
        <div class="video-info">
          <h4>{{ video.title }}</h4>
        </div>
      </a>
    </div>
  {% endfor %}
</div>