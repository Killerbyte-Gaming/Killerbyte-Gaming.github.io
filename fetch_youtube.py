import json
import os
import subprocess
import sys

url = "https://youtube.com"

try:
    print(f"Connecting securely via extraction layer to: {url}")
    
    # Fetch the last 15 uploads with their duration parameters included
    cmd = [
        "yt-dlp",
        "--playlist-end", "15",
        "--dump-json",
        "--flat-playlist",
        url
    ]
    
    result = subprocess.run(cmd, capture_output=True, text=True, check=True)
    
    long_form_videos = []
    shorts_videos = []
    
    for line in result.stdout.strip().split("\n"):
        if not line:
            continue
        data = json.loads(line)
        
        video_id = data.get("id")
        title = data.get("title", "")
        duration = data.get("duration") # Duration is returned in seconds
        
        video_entry = {
            "id": video_id,
            "title": title,
            "link": f"https://youtube.com{video_id}"
        }
        
        # Smart Filter Tuning:
        # Sorts short clips under 60 seconds or containing 'short' hashtags into shorts.json
        if duration and duration <= 60:
            shorts_videos.append(video_entry)
        elif "#shorts" in title.lower() or "short" in title.lower():
            shorts_videos.append(video_entry)
        else:
            long_form_videos.append(video_entry)
            
    long_form_videos = long_form_videos[:6]
    shorts_videos = shorts_videos[:6]
        
    os.makedirs("_data", exist_ok=True)
    
    with open("_data/youtube.json", "w", encoding="utf-8") as f:
        json.dump(long_form_videos, f, ensure_ascii=False, indent=2)
        
    with open("_data/shorts.json", "w", encoding="utf-8") as f:
        json.dump(shorts_videos, f, ensure_ascii=False, indent=2)
        
    print(f"SUCCESS: Generated _data/youtube.json ({len(long_form_videos)}) and _data/shorts.json ({len(shorts_videos)})!")

except Exception as e:
    print(f"Critical data extraction block failed: {e}", file=sys.stderr)
    if hasattr(e, 'stderr') and e.stderr:
        print(f"Details: {e.stderr}", file=sys.stderr)
    sys.exit(1)
