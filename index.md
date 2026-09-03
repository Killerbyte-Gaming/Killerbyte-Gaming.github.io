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
          <img src="https://i.ytimg.com/vi/{{ video.id }}/hqdefault.jpg" alt="{{ video.title | escape }}">
        </div>
        <div class="video-info">
          <h4>{{ video.title }}</h4>
        </div>
      </a>
    </div>
  {% endfor %}
</div>

<h3 class="feed-title">Latest Shorts</h3>
<div class="shorts-grid">
  {% for short in site.data.shorts limit: 4 %}
    <div class="shorts-card">
      <a href="{{ short.link }}" target="_blank" rel="noopener noreferrer">
        <div class="short-thumbnail-wrapper">
          <img src="https://i.ytimg.com/vi/{{ short.id }}/hqdefault.jpg" alt="{{ short.title | escape }}">
        </div>
        <div class="video-info">
          <h4>{{ short.title }}</h4>
        </div>
      </a>
    </div>
  {% endfor %}
</div>
