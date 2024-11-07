// server/models/Application.js
const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    statement: { type: String, required: true },
});

module.exports = mongoose.model('Application', ApplicationSchema);
