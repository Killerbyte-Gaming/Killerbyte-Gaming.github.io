---
layout: page
title: Home
title_hidden: true
---

Welcome to **Killerbyte Gaming**. Check out my latest Old School RuneScape (OSRS) gameplay videos, progression guides, and short clips synced straight from my content channels below!

### Latest Videos

<!-- markdown="0" blocks Jekyll from stripping nested tags, allowing standard small divs -->
<div class="row row-cols-1 row-cols-md-3 g-3 my-2" markdown="0">
  {% for video in site.data.youtube limit: 3 %}
    <div class="col">
      <div class="h-100 p-0 position-relative" style="background: none !important;">
        <a href="https://youtube.com/{{ video.id }}" target="_blank" rel="noopener noreferrer" class="d-block text-decoration-none h-100">
          <div style="border: 1px solid var(--card-border-color) !important; border-radius: 6px; overflow: hidden; background: #000;">
            <img src="https://i.ytimg.com/vi/{{ video.id }}/hqdefault.jpg" style="width: 100%; display: block; margin: 0; padding: 0;" alt="{{ video.title | escape }}">
          </div>
          <div class="pt-2">
            <h6 style="font-size: 0.9rem; line-height: 1.4; color: var(--text-color) !important; font-weight: 600; margin: 0;">{{ video.title }}</h6>
          </div>
        </a>
      </div>
    </div>
  {% endfor %}
</div>

### Latest Shorts

<div class="row row-cols-2 row-cols-md-4 g-2 my-2" markdown="0">
  {% for short in site.data.shorts limit: 4 %}
    <div class="col">
      <div class="h-100 p-0 position-relative" style="background: none !important;">
        <a href="https://youtube.com/{{ short.id }}" target="_blank" rel="noopener noreferrer" class="d-block text-decoration-none h-100">
          <div style="border: 1px solid var(--card-border-color) !important; border-radius: 6px; overflow: hidden; background: #000;">
            <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden;">
              <img src="https://i.ytimg.com/vi/{{ short.id }}/hqdefault.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; margin: 0; padding: 0;" alt="{{ short.title | escape }}">
            </div>
          </div>
          <div class="pt-2">
            <h6 style="font-size: 0.8rem; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; color: var(--text-color) !important; margin: 0;">{{ short.title }}</h6>
          </div>
        </a>
      </div>
    </div>
  {% endfor %}
</div>

<br>

### Connect with Killerbyte Gaming

<div class="d-flex flex-wrap gap-2 my-3" markdown="0">
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline-danger btn-sm font-weight-bold">
    YouTube
  </a>
  <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline-info btn-sm font-weight-bold">
    Twitter / X
  </a>
  <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-sm font-weight-bold" style="color: #9146ff !important; border-color: #9146ff !important;">
    Twitch
  </a>
  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light btn-sm font-weight-bold" style="color: #25f4ee !important; border-color: #fe2c55 !important;">
    TikTok
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline-warning btn-sm font-weight-bold" style="color: #e1306c !important; border-color: #f77737 !important;">
    Instagram
  </a>
</div>
