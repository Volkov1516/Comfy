import mongoose, { mongo } from "mongoose";

const ProductSchema = new mongoose.Schema({
    categoryId: String,
    title: String,
    img: String,
    price: Number,
    rate: Number,
    brand: String,
    rom: Number,
    ram: Number,
    processor: String,
    os: String,
    nfc: Boolean,
    displaySize: String,
    displayResolution: String,
    displayType: String,
    frashrate: Number,
    battery: Number
});

export default mongoose.model('Product', ProductSchema);
