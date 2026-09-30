const CONFIG = {
    // Profile Identity
    username: "camel",
    subtitle: "G A M E L",

    // Background Media Configuration
    // Set type to "image" for photo/gif OR "video" for mp4
    backgroundType: "image", 
    // Exact path to your photo or video inside the assets folder
    backgroundUrl: "assets/bg.jpg", // Change extension (.jpg, .png, .gif, .mp4) to match your uploaded file exactly

    // Audio / Music Link
    musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",

    // Up to 3 Badges (Ensure these exist in your assets folder)
    badges: [
        "assets/badge1.png",
        "assets/badge2.png",
        "assets/badge3.png"
    ],

    // Social Links (Leave as "" to AUTOMATICALLY HIDE the card completely)
    socials: {
        telegram: "https://t.me/yourusername",
        discord: "https://discord.gg/yourinvite",
        instagram: "" // Left empty -> Instagram card will automatically disappear
    }
};
