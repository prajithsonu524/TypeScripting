//express app
import express, { json } from 'express';
import router from './src/routes/userRoutes';

const app = express();
const port = 3000;
app.use(json());

app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));