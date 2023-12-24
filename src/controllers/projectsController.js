const projectsModel = require("../models/projectsModel");


const createProject = async function (req, res) {
    try {
        const data = req.body;
        if (Object.keys(data).length < 1) return res.status(400).send({status: false, message: "Enter all required fields"});
        const projectCreated = await projectsModel.create(data);
        res.status(201).send({status: true, data: projectCreated});
    } catch (error) {
        res.status(500).send({status: false, message: error.message});
    };
};

const updateProject = async function (req, res) {
    try{
        const data = req.body;
                                                                                                                                          
    } catch {
        res.status(500).send({status: false, message: error.message});
    };
};

const getAllProjects = async function (req, res) {
    try {
        const allProjects = await projectsModel.find({isDeleted: false});
        res.status(200).send({status: true, data: allProjects});
    } catch (error) {
        res.status(500).send({status: false, message: error.message});
    };
};

const deleteProject = async function (req, res) {
    try {
        const name = req.params.name;
        console.log(name);
        const projectDeleted = await projectsModel.updateMany({projectTitle: name, isDeleted: false}, {$set: {isDeleted: true}}, {new: true});
        console.log(projectDeleted);
        res.status(200).send({status: true, data: projectDeleted});
    } catch (error) {
        res.status(500).send({status: false, message: error.message});
    };
};

module.exports = {createProject, updateProject, getAllProjects, deleteProject};