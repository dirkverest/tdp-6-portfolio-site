const express = require('express');
const app = express();
const port = 3000;
const mainRoutes = require('./routes'); // Setup routes (gets index.js as a default)
const errorHandler = require('./errorHandlers.js');
// Express Settings
app.set('title', 'My Portfolio');
app.set('view engine', 'pug'); // Set the view engine
// Static file server redirected to /static folder
app.use('/static', express.static('public'));
// Routes
app.use(mainRoutes);
// Error Handlers
app.use(errorHandler.fourOFourHanlder);
app.use(errorHandler.globalHandler);
// Server listen to correct port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});