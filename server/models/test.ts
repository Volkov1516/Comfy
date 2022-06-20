import mongoose, { mongo } from 'mongoose';

const TestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [20, 'cannot be more than 20'], 
    },
});

export default mongoose.model("Test", TestSchema);
