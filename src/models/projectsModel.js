const mongoose = require('mongoose');

const projectModel = new mongoose.Schema({
    projectTitle: {
        type: String,
        required: true,
        trim: true
    },
    projectType: {
        type: String,
        required: true,
        enum: ['Front-end', 'Back-end', 'Full-stack'],
        trim: true
    },
    usedTechStacks: {
        type: [String],
        required: true
    },
    projectHighlights: {
        type: String,
        required: true,
        trim: true
    },
    projectDescription: {
        type: String,
        required: true,
        trim: true
    },
    projectImage: {
        type: String,
        trim: true
    },
    projectVideo: {
        type: String,
        trim: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports = mongoose.model('Project', projectModel);