import { Router } from 'express';
import { homeController } from './home.controllers';

export default Router().get('/', homeController);
