
# 🎮 Pixel Glass Bio Link

A minimalist, retro pixel-styled bio profile link page featuring translucent glassmorphic cards, custom badges, falling particle effects, and background music support.

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
    backgroundUrl: "https://your-image-url.com/bg.jpg", // Local path or web URL

    // 3. Audio Track (.mp3 file link)
    musicUrl: "",

    // 4. Badges (Icons next to username)
    badges: [
        "https://cdn-icons-png.flaticon.com/512/616/616489.png",
        "https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
    ],

    // 5. Social Links (Leave as "" to hide a button)
    socials: {
        telegram: "https://t.me/yourusername",
        discord: "https://discord.gg/yourinvite",
        instagram: "https://instagram.com/yourusername"
    }
};

🚀 How to Make & Deploy Your Own Site on Vercel
​Follow these steps to log in, connect your code, and host your live site for free:
​Step 1: Create or Log in to Vercel
​Go to vercel.com.
​Click Sign Up (or Log In if you already have an account).
​Select Continue with GitHub to log in using your GitHub credentials.
​Step 2: Deploy Your Site
​Make sure your GitHub repository contains index.html, styles.css, config.js, and README.md.
​Go to your Vercel Dashboard.
​Click the Add New... button in the top right and select Project.
​Under Import Git Repository, find your repository and click Import.
​Leave the Framework Preset as Other (since this is a static HTML/CSS/JS site).
​Click Deploy.
​Wait ~15 seconds—Vercel will give you a live domain link (e.g., your-site.vercel.app).
​💡 Auto-Updates: Whenever you edit your config.js file directly on GitHub, Vercel will automatically re-deploy your site in seconds!
