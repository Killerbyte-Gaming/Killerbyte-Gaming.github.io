import urllib.request
import xml.etree.ElementTree as ET
import json
import os
import sys

url = 'https://youtube.com'

# Desktop browser mask to guarantee YouTube serves raw XML data
req = urllib.request.Request(
    url, 
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
)

try:
    response = urllib.request.urlopen(req)
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
            'id': video_id,
            'title': title,
            'link': link
        })
    
    os.makedirs('_data', exist_ok=True)
    with open('_data/youtube.json', 'w', encoding='utf-8') as f:
        json.dump(videos, f, ensure_ascii=False, indent=2)
        
    print("Successfully generated _data/youtube.json")
    
except Exception as e:
    print(f"Critical parsing failure encountered: {e}")
    sys.exit(1)