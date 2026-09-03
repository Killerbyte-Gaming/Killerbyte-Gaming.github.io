import json
import os
import subprocess
import sys

# Your verified YouTube channel identifier string
CHANNEL_ID = "UCpAoQMXFb5Zq7d7egXOjveg"
url = f"https://youtube.com{CHANNEL_ID}"

try:
    print(f"Connecting securely via extraction layer to: {url}")
    
    # Execute a clean command to fetch metadata for your last 15 uploads
    # --flat-playlist speeds up extraction massively by skipping deep video metadata parsing
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
    
    # Parse the output metadata streams
    for line in result.stdout.strip().split("\n"):
        if not line:
            continue
        data = json.loads(line)
        
        video_id = data.get("id")
        title = data.get("title")
        duration = data.get("duration") # Duration is returned in seconds
        
        video_entry = {
            "id": video_id,
            "title": title,
            "link": f"https://www.youtube.com/watch?v={video_id}"
        }
        
        # Smart Filtering Logic: 
        # YouTube Shorts are explicitly capped at a maximum duration of 60 seconds.
        if duration and duration <= 60:
            shorts_videos.append(video_entry)
        else:
            long_form_videos.append(video_entry)
            
    # Cap both collections to clear layout space
    long_form_videos = long_form_videos[:6]
    shorts_videos = shorts_videos[:6]
        
    # Build your data folders and export clean JSON structures
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
