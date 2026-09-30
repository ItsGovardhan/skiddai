🎮 Social Link Web Design

A minimalist, retro pixel-styled social bio/link page featuring glassmorphic cards, custom badges, falling particles, background images/videos, and music support.

«Made by skiddai ⚡»

---

✨ Features

- 🎨 Retro pixel-style design
- 🪟 Translucent glassmorphic cards
- ✨ Falling particle effects
- 🖼️ Image or video background
- 🎵 Background music support
- 🏷️ Custom profile badges
- 🔗 Social media links
- ⚙️ Easy configuration through "config.js"
- 🚀 Easy deployment with Vercel

---

⚡ Quick Customization

You don't need to edit the HTML or CSS.

Simply open "config.js" and change the values:

const CONFIG = {
    // 1. Profile Identity
    username: "camel",
    subtitle: "click me",

    // 2. Background Settings
    // Use "image" or "video"
    backgroundType: "image",
    backgroundUrl: "https://your-image-url.com/bg.jpg",

    // 3. Background Music
    musicUrl: "https://your-music-url.com/music.mp3",

    // 4. Profile Badges
    badges: [
        "https://your-image-url.com/badge1.png",
        "https://your-image-url.com/badge2.png"
    ],

    // 5. Social Links
    // Leave "" to hide a button
    socials: {
        telegram: "https://t.me/yourusername",
        discord: "https://discord.gg/yourinvite",
        instagram: "https://instagram.com/yourusername"
    }
};

🖼️ Background

For an image:

backgroundType: "image"

For a video:

backgroundType: "video"

Then add your direct image/video URL:

backgroundUrl: "https://example.com/background.mp4"

🎵 Music

Add a direct ".mp3" URL:

musicUrl: "https://example.com/music.mp3"

Leave it empty if you don't want background music:

musicUrl: ""

🔗 Social Links

Add your social URLs inside "config.js".

To hide a platform, simply leave it empty:

telegram: "",
discord: "https://discord.gg/example",
instagram: ""

---

📁 File Structure

├── index.html       # Main page structure
├── styles.css       # Styling, animations and glass effects
├── config.js        # Profile, background and social settings
└── README.md        # Documentation

---

🚀 Deploy on Vercel

1. Go to Vercel and log in with GitHub.
2. Click Add New → Project.
3. Select your GitHub repository.
4. Click Import.
5. Set Framework Preset to "Other".
6. Click Deploy.

That's it! Your website will be live.

🔄 Automatic Updates

After connecting your GitHub repository, changes pushed to the repository will automatically trigger a new Vercel deployment.

So if you edit "config.js" and push the changes, your website will update automatically.

---

📜 License

You are free to use and customize this project for your own website.

Made by skiddai ⚡
