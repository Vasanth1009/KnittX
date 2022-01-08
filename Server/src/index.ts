import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() =>
    app.listen(5000, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));
