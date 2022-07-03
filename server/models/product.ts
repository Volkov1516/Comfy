import mongoose, { mongo } from "mongoose";

const ProductSchema = new mongoose.Schema({
    categoryId: String,
    name: String,
    brand: String,
    model: String,
    color: String,
    colorAvailable: [],
    price: Number,
    rate: Number,
    rom: Number,
    romAvailable: [],
    ram: Number,
    processor: String,
    os: String,
    displaySize: Number,
    displayResolution: String,
    displayType: String,
    displayFrashrate: Number,
    battery: Number,
    images: Array,
    labels: Array,
});

export default mongoose.model('Product', ProductSchema);
