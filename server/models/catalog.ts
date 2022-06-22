import mongoose, {mongo} from 'mongoose';

const CatalogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

export default mongoose.model("Catalog", CatalogSchema);
