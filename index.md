---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: home
---

<style>
  /* Shunts the desktop layout to use more compact sizing rules */
  .video-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)) !important;
    gap: 15px !important;
  }
  
  .shorts-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)) !important;
    gap: 12px !important;
  }
  
  /* Restores explicit widescreen boundaries to prevent layout stretching */
  .thumbnail-wrapper {
    position: relative;
    width: 100%;
    padding-top: 56.25% !important;
    background: #000;
    display: block !important;
  }
  
  .short-thumbnail-wrapper {
    position: relative;
    width: 100%;
    padding-top: 177.77% !important;
    background: #000;
    display: block !important;
  }
</style>

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
