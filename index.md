---
layout: page
title: Home
title_hidden: true
---

Welcome to **Killerbyte Gaming**. Check out my latest Old School RuneScape (OSRS) gameplay videos, progression guides, and short clips synced straight from my content channels below!

### Latest Videos

<!-- RESTORED & CENTERED: Reverted to auto-fit for larger sizes, max-width centers the row footprint -->
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; max-width: 900px; margin: 15px auto 0 auto;" markdown="0">
  {% for video in site.data.youtube limit: 3 %}
    <div style="border: 1px solid var(--card-border-color); border-radius: 6px; overflow: hidden; background: #000; padding: 10px;">
      <div style="width: 100%; aspect-ratio: 16 / 9; overflow: hidden; border-radius: 4px;">
        <img src="https://i.ytimg.com/vi/{{ video.id }}/hqdefault.jpg" class="no-image-viewer w-100 h-100" style="object-fit: cover; display: block; margin: 0; padding: 0;" alt="{{ video.title | escape }}">
      </div>
      <div style="padding-top: 8px; text-align: center;">
        <a href="https://youtube.com{{ video.id }}" target="_blank" rel="noopener noreferrer" style="font-size: 0.9rem; line-height: 1.4; color: var(--text-color) !important; font-weight: 600; margin: 0; text-decoration: none !important; display: block;">{{ video.title }}</a>
      </div>
    </div>
  {% endfor %}
</div>

<br>

### Latest Shorts

<!-- RESTORED & CENTERED: Reverted to auto-fit for larger portrait sizes -->
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 15px; max-width: 700px; margin: 15px auto 0 auto;" markdown="0">
  {% for short in site.data.shorts limit: 4 %}
    <div style="border: 1px solid var(--card-border-color); border-radius: 6px; overflow: hidden; background: #000; padding: 10px;">
      <div style="width: 100%; aspect-ratio: 9 / 16; overflow: hidden; border-radius: 4px;">
        <img src="https://i.ytimg.com/vi/{{ short.id }}/hqdefault.jpg" class="no-image-viewer w-100 h-100" style="object-fit: cover; display: block; margin: 0; padding: 0;" alt="{{ short.title | escape }}">
      </div>
      <div style="padding-top: 8px; text-align: center;">
        <a href="https://youtube.com{{ short.id }}" target="_blank" rel="noopener noreferrer" style="font-size: 0.8rem; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; color: var(--text-color) !important; margin: 0; text-decoration: none !important;">{{ short.title }}</a>
      </div>
    </div>
  {% endfor %}
</div>

<br><br>

### Connect with Killerbyte Gaming

<!-- FIXED: Custom inline styles to force a beautiful, unified deep red palette across all platform buttons -->
<div class="d-flex flex-wrap gap-2 my-3" markdown="0" style="position: relative; z-index: 10; clear: both !important;">
  <style>
    /* Global class for your unified red gaming button aesthetic */
    .btn-gamer-red {
      background-color: #0f0c0c !important;
      color: #ff3333 !important;
      border: 1px solid #382929 !important;
      font-weight: bold !important;
      transition: all 0.2s ease-in-out !important;
    }
    
    /* Active hover animation with a clean crimson glow effect */
    .btn-gamer-red:hover {
      background-color: #ff3333 !important;
      color: #0f0c0c !important;
      border-color: #ff3333 !important;
      transform: translateY(-2px) !important;
      box-shadow: 0 4px 12px rgba(255, 51, 51, 0.4) !important;
    }
  </style>

  <a href="https://youtube.com/@killerbyte_gaming" target="_blank" rel="noopener noreferrer" class="btn btn-gamer-red btn-sm">
    YouTube
  </a>
  <a href="https://x.com/killerbytegame" target="_blank" rel="noopener noreferrer" class="btn btn-gamer-red btn-sm">
    Twitter / X
  </a>
  <a href="https://twitch.tv/killerbyte_gaming" target="_blank" rel="noopener noreferrer" class="btn btn-gamer-red btn-sm">
    Twitch
  </a>
  <a href="https://tiktok.com/killerbyte_gaming" target="_blank" rel="noopener noreferrer" class="btn btn-gamer-red btn-sm">
    TikTok
  </a>
  <a href="https://instagram.com/killerbyte_gaming" target="_blank" rel="noopener noreferrer" class="btn btn-gamer-red btn-sm">
    Instagram
  </a>
</div>

