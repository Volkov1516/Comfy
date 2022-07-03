import mongoose, { mongo } from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    query: String,
});

const SubcategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    img: String,
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
