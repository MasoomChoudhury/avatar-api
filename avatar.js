const express = require('express');
const uuid = require('uuid');
const path = require('path');

const app = express();
const port = 3000;

// Sample data for names and avatar URLs
const names = [
    "Pixel Pajamas",
    "Velvet Vortex",
    "Lunar Lullaby",
    "Bubble Bumble",
    "Funky Ferret",
    "Twinkle Tidbit",
    "Breezy Biscuit",
    "Sunny Snippet",
    "Cozy Cupcake",
    "Jazz Jigsaw",
    "Dandy Doodle",
    "Witty Widget",
    "Spunky Sprinkle",
    "Whisk Waffle",
    "Snazzy Sizzle",
    "Fluffy Flapjack",
    "Giddy Gadget",
    "Cheery Cherry",
    "Dizzy Daisy",
    "Plush Puddle",
  ];
const avatarUrls = [
    "https://your-avatar-api.vercel.app/photos/avatar1.png",
    "https://your-avatar-api.vercel.app/photos/avatar2.png",
    "https://your-avatar-api.vercel.app/photos/avatar3.png",
    "https://your-avatar-api.vercel.app/photos/avatar4.png",
    "https://your-avatar-api.vercel.app/photos/avatar5.png",
    "https://your-avatar-api.vercel.app/photos/avatar6.png",
    "https://your-avatar-api.vercel.app/photos/avatar7.png",
    "https://your-avatar-api.vercel.app/photos/avatar8.png",
    "https://your-avatar-api.vercel.app/photos/avatar9.png",
    "https://your-avatar-api.vercel.app/photos/avatar10.png",
    "https://your-avatar-api.vercel.app/photos/avatar11.png",
    "https://your-avatar-api.vercel.app/photos/avatar12.png",
    "https://your-avatar-api.vercel.app/photos/avatar13.png",
    "https://your-avatar-api.vercel.app/photos/avatar14.png",
    "https://your-avatar-api.vercel.app/photos/avatar15.png",
    "https://your-avatar-api.vercel.app/photos/avatar16.png",
    "https://your-avatar-api.vercel.app/photos/avatar17.png",
    "https://your-avatar-api.vercel.app/photos/avatar18.png",
    "https://your-avatar-api.vercel.app/photos/avatar19.png",
    "https://your-avatar-api.vercel.app/photos/avatar20.png",
    "https://your-avatar-api.vercel.app/photos/avatar21.png",
    "https://your-avatar-api.vercel.app/photos/avatar22.png",
    "https://your-avatar-api.vercel.app/photos/avatar23.png",
    "https://your-avatar-api.vercel.app/photos/avatar24.png",
    "https://your-avatar-api.vercel.app/photos/avatar25.png",
];

// Serve static files from the 'photos' folder
app.use('/photos', express.static(path.join(__dirname, 'photos')));

// Route to get a random profile with a unique ID
app.get('/random-profile', (req, res) => {
    // Generate a unique ID
    const uniqueId = uuid.v4();

    // Get a random name and avatar URL
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAvatar = avatarUrls[Math.floor(Math.random() * avatarUrls.length)];

    // Create an object containing the unique ID, name, and avatar URL
    const profile = { id: uniqueId, name: randomName, avatar_url: randomAvatar };

    // Return the profile as JSON
    res.json(profile);
});

// Start the server
app.listen(port, () => {
    console.log(`Here's your unique avatar`);
});
