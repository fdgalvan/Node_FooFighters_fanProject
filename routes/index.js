
//imports Express
const express = require('express');
//invoke Express router on object already within existing code elsewhere in project
const router = express.Router();

const dataFile = require('../data/FF_data.json');

let albumInfo = dataFile.data;

router.get('/', (req, res) => {

    let albumArt = [];
    let albumTitle = [];

    albumInfo.forEach(titleArt => {
        albumArt = albumArt.concat(titleArt.imgURL);
        albumTitle = albumTitle.concat(titleArt.name);
    })

    console.log(albumArt);
    console.log(albumTitle);

    res.render('index', {
        albumArtwork: albumArt,
        albumTitles: albumTitle,
        allInfoL: albumInfo,
    })
})

//exports subrouter
module.exports = router;