import express, { Application } from 'express';

const app: Application = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Social Pulse Backend is Running with Bun!');
});

export default app;
