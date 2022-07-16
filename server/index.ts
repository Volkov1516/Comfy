import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import { notFound } from './middleware/notFound';
import { auth } from './middleware/authentication';

import categoryRouter from './routes/category';
import productRouter from './routes/product';
import authRouter from './routes/auth';

const app = express();

dotenv.config();

const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/auth', authRouter);

app.use(notFound);

mongoose
    .connect(process.env.MONGODB_URI as string)
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server is running on port 5000...');
        });
    })
    .catch((err) => console.log(err));
