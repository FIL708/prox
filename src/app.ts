import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { logger } from './utils/logger';

dotenv.config();

const app: Express = express();

const { PORT } = process.env;

app.get('/', (req: Request, res: Response) => {
    res.send('express');
});

app.listen(PORT, () => {
    logger.info(`Server is running at http://localhost:${PORT}`);
});
