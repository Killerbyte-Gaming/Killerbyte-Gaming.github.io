import json
import os
import subprocess
import sys

# TARGET MATCH: Direct, hardcoded layout links targeting your specific streams natively
targets = {
    "youtube": "https://youtube.com",
    "shorts": "https://youtube.com"
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
                    "link": f"https://youtube.com/{video_id}"
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
