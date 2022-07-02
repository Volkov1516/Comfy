import mongoose, { mongo } from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    productId: {
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

const NewCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subcategories: [SubcategorySchema],
});

export default mongoose.model('NewCategory', NewCategorySchema);
