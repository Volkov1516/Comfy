import express from 'express';
import router from './routes/test';

const app = express();

const PORT = 5000;

app.use(express.json());

app.use('/api/v1/test', router);

app.listen(PORT, () => {
    console.log('Server is running on port 5000...');
});
