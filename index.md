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
    <!-- FIXED: Swapped out generic cards for a transparent border-less container frame -->
    <div class="h-100 p-0 position-relative" style="background: none !important;">
      <a href="{{ video.link }}" target="_blank" rel="noopener noreferrer" class="d-block rounded overflow-hidden shadow-sm" style="border: 1px solid var(--card-border-color) !important;">
        <img src="https://i.ytimg.com/vi/{{ video.id }}/hqdefault.jpg" class="img-fluid w-100 d-block" alt="{{ video.title | escape }}">
      </a>
      <div class="pt-2">
        <!-- FIXED: Utilised Chirpy's global text variable theme mapping for air-tight color visibility -->
        <h6 class="mb-0" style="font-size: 0.9rem; line-height: 1.4; color: var(--text-color) !important; font-weight: 600;">{{ video.title }}</h6>
      </div>
    </div>
  </div>
{% endfor %}
</div>

### Latest Shorts

<div class="row row-cols-2 row-cols-md-4 g-2 my-2">
{% for short in site.data.shorts limit: 4 %}
  <div class="col">
    <div class="h-100 p-0 position-relative" style="background: none !important;">
      <a href="{{ short.link }}" target="_blank" rel="noopener noreferrer" class="d-block rounded overflow-hidden shadow-sm" style="border: 1px solid var(--card-border-color) !important;">
        <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; background: #000;">
          <img src="https://i.ytimg.com/vi/{{ short.id }}/hqdefault.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" alt="{{ short.title | escape }}">
        </div>
      </a>
      <div class="pt-2">
        <h6 class="mb-0" style="font-size: 0.8rem; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; color: var(--text-color) !important;">{{ short.title }}</h6>
      </div>
    </div>
  </div>
{% endfor %}
</div>
