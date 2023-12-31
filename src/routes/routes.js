const express = require('express');
const router = express.Router();

router.get('/test', function (req, res) {
    res.send('working');
});

const {createProject, getAllProjects, deleteProject} = require('../controllers/projectsController');
router.post('/createProject', createProject);
router.get('/projects', getAllProjects);
router.delete('/delete/:name', deleteProject);


const { createQuery, getAllQueries } = require('../controllers/queryController');
router.post('/query', createQuery);
router.get('/query', getAllQueries);

router.all('/*', function (req, res) {
    res.status(404).send({status: false, message: "Page not found"});
});

module.exports = router;