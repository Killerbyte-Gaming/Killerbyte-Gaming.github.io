import json
import os
import sys
import time
import urllib.request
import xml.etree.ElementTree as ET

CHANNEL_ID = "UCpAoQMXFb5Zq7d7egXOjveg"

# Hidden YouTube Parameter Hacks to isolate distinct streams
long_form_playlist = CHANNEL_ID.replace("UC", "UULF", 1)
shorts_playlist = CHANNEL_ID.replace("UC", "UUSH", 1)

targets = {
    "youtube": f"https://youtube.com{long_form_playlist}",
    "shorts": f"https://youtube.com{shorts_playlist}"
}

def fetch_and_parse_with_retry(url, max_retries=3, delay=5):
    req = urllib.request.Request(
        url,
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
    )
    
    # Defensive network retry execution track
    for attempt in range(1, max_retries + 1):
        try:
            response = urllib.request.urlopen(req, timeout=15)
            xml_data = response.read()
            
            root = ET.fromstring(xml_data)
            namespaces = {
                'atom': 'http://w3.org',
                'yt': 'http://youtube.com'
            }
            
            videos = []
            for entry in root.findall('atom:entry', namespaces):
                video_id = entry.find('yt:videoId', namespaces).text
                title = entry.find('atom:title', namespaces).text
                link = entry.find('atom:link', namespaces).attrib['href']
                
                videos.append({
                    "id": video_id,
                    "title": title,
                    "link": link
                })
            return videos[:6] # Return the payload if successful
            
        except Exception as network_error:
            print(f"Network warning (Attempt {attempt}/{max_retries}): {network_error}")
            if attempt < max_retries:
                print(f"Waiting {delay} seconds before retrying...")
                time.sleep(delay)
            else:
                # If all retries fail, raise the error to halt gracefully
                raise network_error

try:
    os.makedirs("_data", exist_ok=True)
    
    for key, feed_url in targets.items():
        print(f"Syncing data stream for: {key}")
        data_payload = fetch_and_parse_with_retry(feed_url)
        
        with open(f"_data/{key}.json", "w", encoding="utf-8") as f:
            json.dump(data_payload, f, ensure_ascii=False, indent=2)
            
    print("SUCCESS: Both _data/youtube.json and _data/shorts.json generated cleanly!")

except Exception as e:
    print(f"Critical execution failure encountered: {e}", file=sys.stderr)
    sys.exit(1)
