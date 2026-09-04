---
layout: page
title: Home
title_hidden: true
---

Welcome to **Killerbyte Gaming**. Check out my latest Old School RuneScape (OSRS) gameplay videos, progression guides, and short clips synced straight from my content channels below!

### Latest Videos

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin-top: 15px;" markdown="0">
  {% for video in site.data.youtube limit: 3 %}
    <div style="border: 1px solid var(--card-border-color); border-radius: 6px; overflow: hidden; background: #000; padding: 10px;">
      <!-- REMOVED LINK: The image container now renders as a standard standalone graphic element -->
      <div style="width: 100%; aspect-ratio: 16 / 9; overflow: hidden; border-radius: 4px;">
        <img src="https://i.ytimg.com/vi/{{ video.id }}/hqdefault.jpg" class="no-image-viewer w-100 h-100" style="object-fit: cover; display: block; margin: 0; padding: 0;" alt="{{ video.title | escape }}">
      </div>
      <div style="padding-top: 8px;">
        <a href="https://youtube.com{{ video.id }}" target="_blank" rel="noopener noreferrer" style="font-size: 0.9rem; line-height: 1.4; color: var(--text-color) !important; font-weight: 600; margin: 0; text-decoration: none !important; display: block;">{{ video.title }}</a>
      </div>
    </div>
  {% endfor %}
</div>

<br>

### Latest Shorts

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px; margin-top: 15px;" markdown="0">
  {% for short in site.data.shorts limit: 4 %}
    <div style="border: 1px solid var(--card-border-color); border-radius: 6px; overflow: hidden; background: #000; padding: 10px;">
      <!-- REMOVED LINK: The portrait image wrapper now scales as a purely visual thumbnail frame -->
      <div style="width: 100%; aspect-ratio: 9 / 16; overflow: hidden; border-radius: 4px;">
        <img src="https://i.ytimg.com/vi/{{ short.id }}/hqdefault.jpg" class="no-image-viewer w-100 h-100" style="object-fit: cover; display: block; margin: 0; padding: 0;" alt="{{ short.title | escape }}">
      </div>
      <div style="padding-top: 8px;">
        <a href="https://youtube.com{{ short.id }}" target="_blank" rel="noopener noreferrer" style="font-size: 0.8rem; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; color: var(--text-color) !important; margin: 0; text-decoration: none !important;">{{ short.title }}</a>
      </div>
    </div>
  {% endfor %}
</div>

<br><br>

### Connect with Killerbyte Gaming

<div class="d-flex flex-wrap gap-2 my-3" markdown="0" style="position: relative; z-index: 10; clear: both !important;">
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
