const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

// Verified links & assets for Killerbyte Gaming
export const CITADEL_LINKS = {
  twitch: "https://www.twitch.tv/killerbyte_gaming",
  youtube: "https://www.youtube.com/@killerbyte_gaming",
  youtubeVideos: "https://www.youtube.com/@killerbyte_gaming/videos",
  facebook: "https://www.facebook.com/killerbytegaming",
  beacons: "https://beacons.ai/killerbyte_gaming",
};

export const HERO_IMAGE =
  "https://media.db.com/images/public/6a9955210eb7e7144a0fda64/0fc0f0587_generated_beb5204b.jpg";
export const IRON_TEXTURE =
  "https://media.db.com/images/public/6a9955210eb7e7144a0fda64/f8138d6c2_generated_08a82246.jpg";
export const PARCHMENT_TEXTURE =
  "https://media.db.com/images/public/6a9955210eb7e7144a0fda64/784f813d9_generated_82f5a06e.jpg";

// Content library. The featured video is a real upload; series cards route to the channel.
export const CONTENT = [
  {
    title: "This One Item Changed My Slayer Grind Forever",
    series: "Maxing as a PvM Noob — Ep. 2",
    length: "21:21",
    kind: "Epic Quest",
    url: "https://www.youtube.com/watch?v=izVqIYbjMRQ",
    thumb: "https://i.ytimg.com/vi/izVqIYbjMRQ/maxresdefault.jpg",
    size: "large",
  },
  {
    title: "The Slayer Master That Changed the Game",
    series: "Maxing as a PvM Noob — Ep. 3",
    length: "Series",
    kind: "Epic Quest",
    url: CITADEL_LINKS.youtubeVideos,
    thumb: null,
    size: "large",
  },
  {
    title: "Combat Achievements: Barrows & KBD",
    series: "CA Grind",
    length: "Quick XP",
    kind: "Quick XP",
    url: CITADEL_LINKS.youtubeVideos,
    thumb: null,
    size: "small",
  },
  {
    title: "Wilderness Slayer — High Risk, High Reward",
    series: "Slayer Grind",
    length: "Quick XP",
    kind: "Quick XP",
    url: CITADEL_LINKS.youtubeVideos,
    thumb: null,
    size: "small",
  },
  {
    title: "99 Farming & The First Skillcape",
    series: "Maxing as a PvM Noob",
    length: "Quick XP",
    kind: "Quick XP",
    url: CITADEL_LINKS.youtubeVideos,
    thumb: null,
    size: "small",
  },
  {
    title: "Moons of Glory & Chest Loot",
    series: "PvM Noob",
    length: "Quick XP",
    kind: "Quick XP",
    url: CITADEL_LINKS.youtubeVideos,
    thumb: null,
    size: "small",
  },
];