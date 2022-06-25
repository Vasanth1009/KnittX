import express, { Request, Response } from 'express';
import cors from 'cors';
import customerRoute from './routes/customerRoute';
import invoiceRoute from './controllers/invoiceController';
import decodeIDToken from '../src/middlewares/authMiddleware';

const app = express();

app.use(express.json());
app.use(cors());
app.use(decodeIDToken);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to KnittX-API');
});

app.use('/api/customer', customerRoute);
app.use('/api/invoice', invoiceRoute);

export default app;
