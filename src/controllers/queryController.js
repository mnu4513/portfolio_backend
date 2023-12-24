const queryModel = require("../models/queryModel");

const validMail = (mail) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
const validName = (name) => /^[a-zA-Z_ ]{3,20}$/.test(name);

const createQuery = async function (req, res) {
    try {
        const data = req.body;

        if (Object.keys(data).length < 1) return res.status(400).send({status: false, message: "Please enter all required details"});
        const { name, email, message } = data;

        if (!name) return res.status(400).send({ status: false, message: "Please enter name" });
        if (!email) return res.status(400).send({ status: false, message: "Please enter email" });
        if (!message) return res.status(400).send({ status: false, message: "Please enter message" });
        if (!validName(name)) return res.status(400).send({ status: false, message: "Please enter a valid name" });
        if (!validMail(email)) return res.status(400).send({ status: false, message: "Please enter a valid email" });
        if (message.length < 20) return res.status(400).send({ status: false, message: "Please enter a valid message" });

        const queryCreated = await queryModel.create(data);
        res.status(201).send({ status: true, data: queryCreated });

    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    };
};


const getAllQueries = async function (req, res) {
    try {
        const allQueires = await queryModel.find();
        if (allQueires.length < 1) return res.status(404).send({status: false, message: "No query found"});
        res.status(200).send({status: true, data: allQueires});
    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    };
};


module.exports = {createQuery, getAllQueries};