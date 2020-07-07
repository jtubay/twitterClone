const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MewsSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "is required"
    },
    content: {
        type: String,
        trim: true,
        required: "is required"
    },
    mewCreated: {
        type: Date,
        default: Date.now
    }

});

const Mews = mongoose.model("Mews", MewsSchema)
module.exports = Mews;