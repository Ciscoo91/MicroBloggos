const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myMessage = new Schema({
    message: {
        type: String,
        required: true,
        min: 1,
        max: 140
    },
    author: {
        type: String,
        required: true
    },
    author_id: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now(),
        required: true,
    }
}, {
    collection: "Message",
    usePushEach: true
});

myMessage.pre('save', (next) => {
    const now = Date.now();
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
})

const Message = mongoose.model("Message", myMessage);

module.exports = Message;
