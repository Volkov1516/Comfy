import mongoose, { mongo } from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    query: {
        type: String,
        required: true,
    },
});

const SubcategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    products: [ProductSchema],
});

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    subcategories: [SubcategorySchema],
});

export default mongoose.model('Category', CategorySchema);
