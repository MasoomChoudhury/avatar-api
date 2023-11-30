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
    "https://example.com/avatar1.png",
    "https://example.com/avatar2.png",
    "https://example.com/avatar3.png",
    "https://example.com/avatar4.png",
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
