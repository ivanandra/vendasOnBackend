import express from 'express';
import routes from './routes';

const port = 3332;
const app = express();

app.use(routes);

app.listen(3332, () => {
    console.log(`Back-end started on port ${port}!`);
});