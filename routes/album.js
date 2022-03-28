
//imports Express
const express = require('express');

//invoke Express router on object already within existing code elsewhere in project
const router = express.Router()

router.get('/album', (req, res) => {
    res.render('album', { //render only works with EJS files, adding .ejs at the end is not needed here
    })
})

//exports subrouter
module.exports = router;