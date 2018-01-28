import * as express from 'express';
const app = express();

import * as HomeController from '../app/controllers/HomeController';

app.get('/',HomeController.index);

app.listen(process.env.PORT, () => console.log(`app listening on port ${process.env.PORT}!`));
export app;
