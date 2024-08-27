const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    idUser: { type: String, required: true },
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }, 
}, { timestamps: true });

module.exports = mongoose.model("Todo", TodoSchema);
