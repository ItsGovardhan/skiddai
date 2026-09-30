# 🎮 Social Link Web 

A minimalist, retro pixel-styled bio profile link page featuring translucent glassmorphic cards, custom badges, falling particle effects, and background music support.

> **Made by skiddai** ⚡

---

## ⚡ Quick Customization (`config.js`)

You do not need to edit any HTML or CSS code to customize your profile. Simply open `config.js` and update your details:

```javascript
const CONFIG = {
    // 1. Profile Identity
    username: "camel",          // Your main handle/display name
    subtitle: "click me",        // Text shown on the overlay screen

    // 2. Background Settings ("image" or "video")
    backgroundType: "image",
    backgroundUrl: "[https://your-image-url.com/bg.jpg](https://your-image-url.com/bg.jpg)", // Local path or web URL

    // 3. Audio Track (.mp3 file link)
    musicUrl: "",

    // 4. Badges (Icons next to username)
    badges: [
        "[https://cdn-icons-png.flaticon.com/512/616/616489.png](https://cdn-icons-png.flaticon.com/512/616/616489.png)",
        "[https://cdn-icons-png.flaticon.com/512/1828/1828640.png](https://cdn-icons-png.flaticon.com/512/1828/1828640.png)"
    ],

    // 5. Social Links (Leave as "" to hide a button)
    socials: {
        telegram: "[https://t.me/yourusername](https://t.me/yourusername)",
        discord: "[https://discord.gg/yourinvite](https://discord.gg/yourinvite)",
        instagram: "[https://instagram.com/yourusername](https://instagram.com/yourusername)"
    }
};
# Deploy Live on Vercel (Free)
​Go to Vercel.com and log in using Continue with GitHub.
​Click Add New... > Project.
​Under Import Git Repository, select your forked repository and click Import.
​Leave Framework Preset as Other.
​Click Deploy.
​💡 Auto-Updates: Whenever you edit your config.js on GitHub, Vercel will automatically re-deploy your website with the new changes!
# Structure
├── index.html        # Main layout structure
├── styles.css        # Pixel styling, glass cards, and animations
├── config.js         # Config file for user details, badges, and links
└── README.md         # Documentation and deployment instructions
