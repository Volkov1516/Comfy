import mongoose from 'mongoose';

const Products = new mongoose.Schema({
    productId: String,
    name: String,
    img: String,
    price: Number,
});

const CartSchema = new mongoose.Schema({
    userId: String,
    products: [Products]
});

export default mongoose.model('Cart', CartSchema);
