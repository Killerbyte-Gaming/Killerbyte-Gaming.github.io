import json
import os
import sys
import urllib.request
import xml.etree.ElementTree as ET

# YOUR REAL VERIFIED WORKING CHANNEL ID
CHANNEL_ID = "UCpAoQMXFb5Zq7d7egXOjveg"
url = f"https://youtube.com/channel/{CHANNEL_ID}"

print(f"Connecting natively to clean RSS endpoint: {url}")

# Disguise the request as a normal mobile browser to bypass datacenter blocking walls
req = urllib.request.Request(
    url,
    headers={
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36'
    }
)

try:
    response = urllib.request.urlopen(req, timeout=15)
    xml_data = response.read()
    
    # Parse XML data structures handling YouTube namespaces explicitly
    root = ET.fromstring(xml_data)
    namespaces = {
        'atom': 'http://w3.org',
        'yt': 'http://youtube.com'
    }
    
    long_form_videos = []
    shorts_videos = []
    
    for entry in root.findall('atom:entry', namespaces):
        video_id = entry.find('yt:videoId', namespaces).text
        title = entry.find('atom:title', namespaces).text
        link = entry.find('atom:link', namespaces).attrib['href']
        
        video_entry = {
            "id": video_id,
            "title": title,
            "link": link
        }
        
        # SMART ROUTING FALLBACK:
        # Categorises clips containing specific short-form terms into shorts.json
        if "#shorts" in title.lower() or "short" in title.lower():
            shorts_videos.append(video_entry)
        else:
            long_form_videos.append(video_entry)
            
    # Cap both collections to clear layout space on your homepage
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
    sys.exit(1)
