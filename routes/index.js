const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');// Get data from the json data file

router.get('/', (req, res) => {
    res.render('index', { projects });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project/:id', (req, res) => {
    const { id } = req.params;
    // const project = projects[id];
    res.render('project', { project: projects[id] });
});

module.exports = router;