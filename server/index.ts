import express from 'express';
import router from './routes/test';
import mongoose from 'mongoose';
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = 5000;

app.use(express.json());

app.use('/api/v1/test', router);

mongoose
    .connect(process.env.MONGODB_URI as string)
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server is running on port 5000...');
        });
    })
    .catch((err) => console.log(err));
