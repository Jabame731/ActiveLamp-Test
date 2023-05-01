import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import urlRoute from './routes/url.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use('/api/short', urlRoute);

//initializing the port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening at Port, ${port}`);
});
