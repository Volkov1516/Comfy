import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    text: {
        type: String
    },
    rate: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export default mongoose.model('Comment', CommentSchema);
