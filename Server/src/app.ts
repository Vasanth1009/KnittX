import express, { Request, Response } from 'express';
import cors from 'cors';
import customerRoute from './routes/customerRoute';

const app = express();

app.use(express.json());
// app.use(cors({ origin : '*' }));
app.use(function (req: Request, res: Response, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to KnittX-API');
});

app.use('/api/customer', customerRoute);

export default app;
