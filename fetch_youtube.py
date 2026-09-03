import json
import os
import subprocess
import sys

# Your verified YouTube channel identifier string
CHANNEL_ID = "UCpAoQMXFb5Zq7d7egXOjveg"

# Hidden YouTube Playlist Structural Transformations:
# UULF points directly to your long-form public uploads feed only
# UUSH points directly to your dedicated YouTube Shorts feed only
long_form_playlist_id = CHANNEL_ID.replace("UC", "UULF", 1)
shorts_playlist_id = CHANNEL_ID.replace("UC", "UUSH", 1)

targets = {
    "youtube": f"https://youtube.com{long_form_playlist_id}",
    "shorts": f"https://youtube.com{shorts_playlist_id}"
}

try:
    os.makedirs("_data", exist_ok=True)
    
    for key, url in targets.items():
        print(f"Connecting securely to {key} playlist: {url}")
        
        # Pull down the last 6 entries from this specific feed layer
        cmd = [
            "yt-dlp",
            "--playlist-end", "6",
            "--dump-json",
            "--flat-playlist",
            url
        ]
        
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        
        videos = []
        for line in result.stdout.strip().split("\n"):
            if not line:
                continue
            data = json.loads(line)
            
            video_id = data.get("id")
            if video_id:
                videos.append({
                    "id": video_id,
                    "title": data.get("title", ""),
                    "link": f"https://youtube.com{video_id}"
                })
        
        # Save the dataset to its respective json file
        with open(f"_data/{key}.json", "w", encoding="utf-8") as f:
            json.dump(videos, f, ensure_ascii=False, indent=2)
            
        print(f"SUCCESS: Generated _data/{key}.json with {len(videos)} entries.")

    print("Automation build sequence complete!")

except Exception as e:
    print(f"Critical data extraction block failed: {e}", file=sys.stderr)
    if hasattr(e, 'stderr') and e.stderr:
        print(f"Details: {e.stderr}", file=sys.stderr)
    sys.exit(1)
