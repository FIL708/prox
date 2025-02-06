import { Request, Response } from 'express';

const homeController = (req: Request, res: Response) => {
    const users = ['Goon', 'Tsuki', 'Joe'];
    res.status(200).send(users);
};

export { homeController };
