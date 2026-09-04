---
layout: page
title: Home
title_hidden: true
---

Welcome to **Killerbyte Gaming**. Check out my latest Old School RuneScape (OSRS) gameplay videos, progression guides, and short clips synced straight from my content channels below!

### Latest Videos

<div class="row row-cols-1 row-cols-md-3 g-3 my-2">
{% for video in site.data.youtube limit: 3 %}
  <div class="col">
    <div class="h-100 p-0 position-relative" style="background: none !important;">
      <!-- FIXED: Wrapped the anchor tag around BOTH the image container and text title -->
      <a href="{{ video.link }}" target="_blank" rel="noopener noreferrer" class="d-block text-decoration-none transition-all">
        <div class="rounded overflow-hidden shadow-sm" style="border: 1px solid var(--card-border-color) !important;">
          <img src="https://ytimg.com{{ video.id }}/hqdefault.jpg" class="img-fluid w-100 d-block" alt="{{ video.title | escape }}">
        </div>
        <div class="pt-2">
          <h6 class="mb-0" style="font-size: 0.9rem; line-height: 1.4; color: var(--text-color) !important; font-weight: 600;">{{ video.title }}</h6>
        </div>
      </a>
    </div>
  </div>
{% endfor %}
</div>

### Latest Shorts

<div class="row row-cols-2 row-cols-md-4 g-2 my-2">
{% for short in site.data.shorts limit: 4 %}
  <div class="col">
    <div class="h-100 p-0 position-relative" style="background: none !important;">
      <!-- FIXED: Wrapped the anchor tag around BOTH the image container and text title -->
      <a href="{{ short.link }}" target="_blank" rel="noopener noreferrer" class="d-block text-decoration-none transition-all">
        <div class="rounded overflow-hidden shadow-sm" style="border: 1px solid var(--card-border-color) !important;">
          <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; background: #000;">
            <img src="https://ytimg.com{{ short.id }}/hqdefault.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" alt="{{ short.title | escape }}">
          </div>
        </div>
        <div class="pt-2">
          <h6 class="mb-0" style="font-size: 0.8rem; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; color: var(--text-color) !important;">{{ short.title }}</h6>
        </div>
      </a>
    </div>
  </div>
{% endfor %}
</div>


### Connect with Killerbyte Gaming

<div class="d-flex flex-wrap gap-2 my-3">
  <a href="https://youtube.com/@killerbyte_gaming" target="_blank" rel="noopener noreferrer" class="btn btn-outline-danger btn-sm font-weight-bold">
    YouTube
  </a>
  <a href="https://x.com/killerbytegame" target="_blank" rel="noopener noreferrer" class="btn btn-outline-info btn-sm font-weight-bold">
    Twitter / X
  </a>
  <a href="https://twitch.tv/killerbyte_gaming" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm font-weight-bold" style="color: #9146ff !important; border-color: #9146ff !important;">
    Twitch
  </a>
  <a href="https://tiktok.com/killerbyte_gaming" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light btn-sm font-weight-bold" style="color: #25f4ee !important; border-color: #fe2c55 !important;">
    TikTok
  </a>
  <a href="https://instagram.com/killerbyte_gaming" target="_blank" rel="noopener noreferrer" class="btn btn-outline-warning btn-sm font-weight-bold" style="color: #e1306c !important; border-color: #f77737 !important;">
    Instagram
  </a>
</div>
