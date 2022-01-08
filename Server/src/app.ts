import express from 'express';
import cors from 'cors';
import customerRoute from './routes/customerRoute';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/customer', customerRoute);

export default app;
