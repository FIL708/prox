import { Router } from 'express';
import home from './home/home.routes';

export default Router().use('/', home);
