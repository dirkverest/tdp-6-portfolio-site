const express = require('express'); //starts a server and listens on port 3000 for connections
const app = express();
const port = 3000;
const mainRoutes = require('./routes'); // Setup routes (gets index.js as a default)

app.set('view engine', 'pug'); // Set the view engine
app.use('/static', express.static('public')); // Static file server redirected to static folder
app.use(mainRoutes); // Routes

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});