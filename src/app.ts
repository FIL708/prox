import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

const { PORT } = process.env;
console.log('aasd');
app.get('/', (req: Request, res: Response) => {
    res.send('express');
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
