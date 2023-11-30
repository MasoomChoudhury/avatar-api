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
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar1.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar2.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar3.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar4.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar5.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar1.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar6.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar7.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar8.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar9.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar10.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar11.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar12.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar13.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar14.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar15.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar16.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar17.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar18.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar19.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar20.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar21.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar22.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar23.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar24.png",
    "https://github.com/MasoomKumarChoudhury/avatar-api/blob/master/photos/avatar25.png",
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
