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
    position: relative !important;
    width: 100% !important;
    padding-top: 56.25% !important;
    background: #000 !important;
    display: block !important;
    overflow: hidden !important;
  }
  
  .short-thumbnail-wrapper {
    position: relative !important;
    width: 100% !important;
    padding-top: 177.77% !important;
    background: #000 !important;
    display: block !important;
    overflow: hidden !important;
  }

  /* CRITICAL CORRECTION: Forces the images to pin directly to the top edges */
  .thumbnail-wrapper img,
  .short-thumbnail-wrapper img {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    margin: 0 !important;
    padding: 0 !important;
  }

    /* Social Link Container Settings */
  .social-link-block {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 12px !important;
    margin-top: 20px !important;
    margin-bottom: 50px !important;
  }

  /* Base Button Styling Parameters */
  .social-btn {
    display: inline-flex !important;
    align-items: center !important;
    padding: 10px 20px !important;
    font-weight: bold !important;
    font-size: 0.9rem !important;
    text-decoration: none !important;
    border-radius: 4px !important;
    border: 1px solid transparent !important;
    transition: all 0.2s ease-in-out !important;
  }

  /* YouTube Red Style Identity Accent */
  .youtube-btn {
    background-color: #1a0000 !important;
    color: #ff4e4e !important;
    border-color: #ff1a1a !important;
  }
  .youtube-btn:hover {
    background-color: #ff1a1a !important;
    color: #ffffff !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 4px 12px rgba(255, 26, 26, 0.3) !important;
  }

  /* Twitter / X Dark Sleek Style Accent */
  .twitter-btn {
    background-color: #0f1419 !important;
    color: #1da1f2 !important;
    border-color: #1da1f2 !important;
  }
  .twitter-btn:hover {
    background-color: #1da1f2 !important;
    color: #ffffff !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 4px 12px rgba(29, 161, 242, 0.3) !important;
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

<h3 class="feed-title">Connect with Killerbyte Gaming</h3>
<div class="social-link-block">
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-btn youtube-btn">
    YouTube
  </a>
  <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="social-btn twitter-btn">
    Twitter / X
  </a>
  <!-- You can duplicate this line below to add Twitch, Discord, etc. -->
</div>
