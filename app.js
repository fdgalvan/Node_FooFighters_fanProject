
// creates Node project that requires Express. Port 3000 is referenced at the bottom.
const express = require('express');
const app = express();
let port = 3000;

//uses info within static assets within public directory. 
app.use(express.static('public'))

//adds to view folder, ejs files
app.set('view engine', 'ejs')

//localhost:3000/
app.use(require("./routes/index"))
//localhost:3000/about
app.use(require("./routes/about"))
//localhost:3000/album
app.use(require("./routes/album"))
//localhost:3000/albums
app.use(require("./routes/albums"))
//localhost:3000/contact
app.use(require("./routes/contact"))


//listening for port referenced at the top (3000)
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})