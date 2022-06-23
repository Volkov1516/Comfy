import mongoose, { mongo } from 'mongoose';

const CategoryObjSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    products: [String]
});

const CategorySchema = new mongoose.Schema({
    catalogId: {
        type: String,
        required: true
    },
    categories: [CategoryObjSchema]
});

export default mongoose.model('Category', CategorySchema);
