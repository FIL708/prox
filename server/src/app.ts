import express, { Application, Request, Response } from 'express';
import routes from './pages';

const app: Application = express();

app.use(routes);

app.use('/test', (req: Request, res: Response): void => {
    res.json({ message: 'Allo! Catch-all route.' });
});

export default app;
