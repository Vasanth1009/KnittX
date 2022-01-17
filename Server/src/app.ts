import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import customerRoute from './routes/customerRoute';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to KnittX-API');
});

app.use('/api/customer', customerRoute);

export default app;
