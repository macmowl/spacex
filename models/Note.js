const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        unique: true,
        trim: true,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    description: {
        type: String,
        maxlength: [140, 'Title cannot be more than 140 characters']
    }
});

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);