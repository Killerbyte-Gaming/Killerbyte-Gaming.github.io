import json
import os
import subprocess
import sys

# Your verified YouTube channel identifier string
url = "https://youtube.com"

try:
    print(f"Connecting securely via extraction layer to: {url}")
    
    # Execute a clean command to fetch metadata for your last 15 uploads
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
        title = data.get("title", "")
        duration = data.get("duration")
        
        video_entry = {
            "id": video_id,
            "title": title,
            "link": f"https://youtube.com{video_id}"
        }
        
        # SMART DUAL-FILTERING LOGIC:
        # 1. Check if duration explicitly registers as a short form (under 60 seconds)
        # 2. Fall back to title checking if duration data is stripped by YouTube's cloud block filters
        is_short = False
        if duration and duration <= 60:
            is_short = True
        elif "#shorts" in title.lower() or "short" in title.lower():
            is_short = True
            
        if is_short:
            shorts_videos.append(video_entry)
        else:
            long_form_videos.append(video_entry)
            
    # Cap both collections to clear layout space on the front page
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
