# Social Link Web Design

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
🚀 How to Make & Deploy Your Own Site on Vercel
​Follow these steps to log in, connect your code, and host your live website for free using Vercel.
​Step 1: Create or Log In to Vercel
​Go to vercel.com.
​Click Sign Up (or Log In if you already have an account).
​Select Continue with GitHub. Log in with your GitHub credentials to link both accounts seamlessly.
​Step 2: Deploy Your Site
​Option A: Deploy via GitHub Repository (Recommended)
​Make sure your GitHub repository contains index.html, styles.css, config.js, and README.md.
​Go to your Vercel Dashboard.
​Click the Add New... button in the top right and select Project.
​Under Import Git Repository, find your repository and click Import.
​Leave the Framework Preset as Other (since this is static HTML/CSS/JS).
​Click Deploy.
​Wait ~15 seconds—Vercel will give you a live domain link (e.g., your-name.vercel.app).
​💡 Auto-Updates: Whenever you edit your config.js file directly on GitHub and commit changes, Vercel will automatically re-deploy your website with the updates!
