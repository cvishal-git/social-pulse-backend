import app from './app';
import dotenve from 'dotenv';
dotenve.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
