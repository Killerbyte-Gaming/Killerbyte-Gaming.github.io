import json
import os
import subprocess
import sys

# Your verified YouTube channel identifier string
CHANNEL_ID = "UCpAoQMXFb5Zq7d7egXOjveg"
url = f"https://youtube.com/channel/{CHANNEL_ID}"

try:
    print(f"Extracting video list from: {url}")
    
    # Execute a clean command to fetch metadata for your last 5 uploads
    cmd = [
        "yt-dlp",
        "--playlist-end", "5",
        "--dump-json",
        "--flat-playlist",
        url
    ]
    
    result = subprocess.run(cmd, capture_output=True, text=True, check=True)
    
    videos = []
    # Parse the output metadata streams
    for line in result.stdout.strip().split("\n"):
        if not line:
            continue
        data = json.loads(line)
        
        videos.append({
            "id": data.get("id"),
            "title": data.get("title"),
            "link": f"https://www.youtube.com/watch?v={data.get('id')}"
        })
        
    # Build your data folders and export clean JSON structures
    os.makedirs("_data", exist_ok=True)
    with open("_data/youtube.json", "w", encoding="utf-8") as f:
        json.dump(videos, f, ensure_ascii=False, indent=2)
        
    print("Successfully built _data/youtube.json data entries.")

except Exception as e:
    print(f"Critical execution block dropped: {e}")
    sys.exit(1)