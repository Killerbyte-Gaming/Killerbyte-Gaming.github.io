---
layout: home
title: Home
---

Welcome to **Killerbyte Gaming**. Check out my latest Old School RuneScape (OSRS) gameplay videos, progression guides, and short clips synced straight from my content channels below!

### Latest Videos

<div class="row row-cols-1 row-cols-md-3 g-3 my-2">
{% for video in site.data.youtube limit: 3 %}
  <div class="col">
    <div class="card h-100 bg-dark text-white border-secondary">
      <a href="{{ video.link }}" target="_blank" rel="noopener noreferrer">
        <img src="https://i.ytimg.com/vi/{{ video.id }}/hqdefault.jpg" class="card-img-top" alt="{{ video.title | escape }}">
      </a>
      <div class="card-body p-2">
        <h6 class="card-title mb-0" style="font-size: 0.9rem; line-height: 1.3; color: #fff;">{{ video.title }}</h6>
      </div>
    </div>
  </div>
{% endfor %}
</div>

### Latest Shorts

<div class="row row-cols-2 row-cols-md-4 g-2 my-2">
{% for short in site.data.shorts limit: 4 %}
  <div class="col">
    <div class="card h-100 bg-dark text-white border-secondary">
      <a href="{{ short.link }}" target="_blank" rel="noopener noreferrer">
        <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden;">
          <img src="https://i.ytimg.com/vi/{{ short.id }}/hqdefault.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" alt="{{ short.title | escape }}">
        </div>
      </a>
      <div class="card-body p-2">
        <h6 class="card-title mb-0" style="font-size: 0.8rem; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; color: #fff;">{{ short.title }}</h6>
      </div>
    </div>
  </div>
{% endfor %}
</div>
